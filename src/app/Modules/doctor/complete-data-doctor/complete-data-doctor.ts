import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../../Core/Servies/data';
import { Igender } from '../../../shared/Interface/shared.interface';
import { ISpecializationType } from '../../../Core/DoctorModel/Models/Enums.model';

@Component({
  selector: 'app-complete-data-doctor',
  standalone: false,
  templateUrl: './complete-data-doctor.html',
  styleUrl: './complete-data-doctor.scss',
})
export class CompleteDataDoctor implements OnInit {
  constructor(private FB: FormBuilder, private http: HttpClient, private DataServies: Data) {}

  ngOnInit(): void {
    this.createDoctorProfile();
    this.getTheGender();
    this.getSpecializationType();
  }

  FormProfileDoctor = signal<FormGroup>(new FormGroup({}));
  datagender = signal<Igender[]>([]);
  SpecializationType = signal<ISpecializationType[]>([]);
  uploadedPdfName: string | null = null;
  uploadedPdfUrl: string | null = null;

  createDoctorProfile() {
    let form = this.FB.group({
      NameAr: ['', Validators.required],
      NameEn: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      Gender: ['', Validators.required],
      NationalId: ['', Validators.required],
      SpecializationTypeId: ['', Validators.required],
      Documents: ['', Validators.required],
    });
    this.FormProfileDoctor.set(form);
  }

  getTheGender() {
    this.DataServies.get<Igender[]>('GeneralEnums/Gender').subscribe((res) =>
      this.datagender.set(res)
    );
  }

  getSpecializationType() {
    this.DataServies.get<ISpecializationType[]>('GeneralEnums/specializationType').subscribe(
      (res) => this.SpecializationType.set(res)
    );
  }

  convertToFormData(form: FormGroup): FormData {
    const formData = new FormData();
    Object.keys(form.controls).forEach((key) => {
      let value = form.get(key)?.value;

      if (value instanceof Date) {
        value = value.toISOString().split('T')[0];
      }
      if (value instanceof File) {
        formData.append(key, value, value.name);
      } else if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });
    return formData;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.FormProfileDoctor().get('Documents')?.setValue(file);
      this.uploadedPdfName = file.name;
      this.uploadedPdfUrl = URL.createObjectURL(file);
    }
  }

  onSupmit() {
    if (this.FormProfileDoctor().invalid) {
      this.FormProfileDoctor().markAllAsTouched();
      return;
    }
    const formData = this.convertToFormData(this.FormProfileDoctor());
    this.DataServies.post('Doctors/CompleteProfile', formData).subscribe({
      next: (res) => console.log('Success:', res),
      error: (err) => console.log('Error:', err),
    });
  }

  getControlName(controlname: string) {
    return this.FormProfileDoctor().get(controlname);
  }
}
