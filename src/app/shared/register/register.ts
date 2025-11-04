import { Core } from './../../Core/Servies/core';
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../Core/Servies/data';
import { Igender, IspecializationType } from '../Interface/shared.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  constructor(
    private FB: FormBuilder,
    private data: Data,
    private Core: Core,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.CheckIsExsistName();
    this.GetTypeGender();
    this.getSpecializationType();
  }

  Formregister = signal<FormGroup>(new FormGroup({}));
  dataGender = signal<Igender[]>([]);
  dataSpecializationType = signal<IspecializationType[]>([]);
  pdfUrl: SafeResourceUrl | null = null;

  @Output() CloseDilog = new EventEmitter<boolean>();

  createForm() {
    const form = this.FB.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required],
      gender: 1,
      dateOfBirth: ['', Validators.required],
      notes: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      nationalId: ['', Validators.required],
      Documents: ['', Validators.required],
    });

    this.Formregister.set(form);
  }

  phoneNumber(event: any) {
    this.Formregister().get('phone')?.patchValue(event);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type === 'application/pdf') {
      // حول الـ PDF لـ Base64
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;

        // احفظ الـ Base64 في الـ form
        this.Formregister().patchValue({ Documents: base64String });

        // اعرض الـ PDF في الـ preview
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(base64String);
      };

      reader.onerror = () => {
        alert('Error reading PDF file.');
        this.Formregister().patchValue({ Documents: '' });
        this.pdfUrl = null;
      };
      // اقرأ الملف كـ Data URL (Base64)
      reader.readAsDataURL(file);
    } else {
      this.Formregister().patchValue({ Documents: '' });
      this.pdfUrl = null;
      alert('Please upload a valid PDF file.');
    }
    // امسح الـ input عشان تقدر ترفع نفس الملف تاني
    input.value = '';
  }

  onSubmit() {
    if (this.Formregister().invalid) {
      this.Formregister().markAllAsTouched();
      return;
    }
    const dateValue = this.Formregister().get('dateOfBirth')?.value;
    if (dateValue) {
      const dateArray = dateValue.toISOString().split('T');
      this.Formregister().patchValue({ dateOfBirth: dateArray[0] });
    }

    this.data.post('Auth/RegisterDoctor', this.Formregister().value).subscribe((res) => {
      if (res) {
        this.Formregister().reset();
        this.CloseDilog.emit(false);
      }
    });
  }

  GetTypeGender() {
    this.data.get<Igender[]>('GeneralEnums/Gender').subscribe((res) => {
      this.dataGender.set(res);
    });
  }

  CheckIsExsistName() {
    const control = this.Formregister().get('userName');
    this.Core.checkExistence(control, 'Auth/CheckUserNameExists', 'UserName');
  }

  getControlName(controlName: string) {
    return this.Formregister().get(controlName);
  }

  getSpecializationType() {
    this.data.get<IspecializationType[]>('GeneralEnums/specializationType').subscribe((res) => {
      this.dataSpecializationType.set(res);
    });
  }
}
