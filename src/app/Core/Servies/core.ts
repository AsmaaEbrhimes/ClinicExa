import { Data } from './data';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Core {
  constructor(private Data:Data){}
  _loading = new BehaviorSubject<boolean>(false);
  _Sussess = new BehaviorSubject<boolean>(false);
  _Error = new BehaviorSubject<boolean>(false);

checkExistence(
    control: AbstractControl | null,
    endpoint: string,
    paramName: string = 'UserName',
    id?: number
  ) {
    if (!control) return;
    control.valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged(),
        filter((value) => !!value && value.trim() !== '')
      )
      .subscribe((value) => {
        let query = `${endpoint}?${paramName}=${value}`;
        if (id) query += `&id=${id}`;

        this.Data.get(query).subscribe((res) => {
          if (res) {
            control.setErrors({ exists: true });
          } else {
            if (control.hasError('exists')) {
              control.setErrors(null);
            }
          }
        });
      });
  }
}
