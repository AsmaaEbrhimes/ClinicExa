import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { Icountry } from '../Interface/shared.interface';

@Component({
  selector: 'app-telphone-input',
  standalone: false,
  templateUrl: './telphone-input.html',
  styleUrl: './telphone-input.scss',
})
export class TelphoneInput implements OnInit {
  ngOnInit(): void {
    this.GetAllCountry();
  }

  country = signal<boolean>(false);
  selectedCode = signal<string>('+20');
  maxLength = signal<number>(10);
  @Output() phoneNumber = new EventEmitter<string>();

  GetAllCountry() {
    return [
      { name: 'Egypt', code: '+20', length: 10 },
      { name: 'Saudi Arabia', code: '+966', length: 9 },
      { name: 'United Arab Emirates', code: '+971', length: 9 },
      { name: 'Kuwait', code: '+965', length: 8 },
      { name: 'Qatar', code: '+974', length: 8 },
      { name: 'Bahrain', code: '+973', length: 8 },
      { name: 'Oman', code: '+968', length: 8 },
      { name: 'Jordan', code: '+962', length: 9 },
      { name: 'Lebanon', code: '+961', length: 8 },
      { name: 'Palestine', code: '+970', length: 9 },
      { name: 'Syria', code: '+963', length: 9 },
      { name: 'Iraq', code: '+964', length: 10 },
      { name: 'Yemen', code: '+967', length: 9 },
      { name: 'Libya', code: '+218', length: 9 },
      { name: 'Tunisia', code: '+216', length: 8 },
      { name: 'Algeria', code: '+213', length: 9 },
      { name: 'Morocco', code: '+212', length: 9 },
      { name: 'Sudan', code: '+249', length: 9 },
      { name: 'United States', code: '+1', length: 10 },
      { name: 'United Kingdom', code: '+44', length: 10 },
      { name: 'Canada', code: '+1', length: 10 },
      { name: 'Australia', code: '+61', length: 9 },
      { name: 'Germany', code: '+49', length: 11 },
      { name: 'France', code: '+33', length: 9 },
      { name: 'Italy', code: '+39', length: 10 },
      { name: 'Spain', code: '+34', length: 9 },
      { name: 'Netherlands', code: '+31', length: 9 },
      { name: 'Belgium', code: '+32', length: 9 },
      { name: 'Switzerland', code: '+41', length: 9 },
      { name: 'Austria', code: '+43', length: 10 },
      { name: 'Sweden', code: '+46', length: 9 },
      { name: 'Norway', code: '+47', length: 8 },
      { name: 'Denmark', code: '+45', length: 8 },
      { name: 'Finland', code: '+358', length: 9 },
      { name: 'Poland', code: '+48', length: 9 },
      { name: 'Turkey', code: '+90', length: 10 },
      { name: 'Greece', code: '+30', length: 10 },
      { name: 'Russia', code: '+7', length: 10 },
      { name: 'China', code: '+86', length: 11 },
      { name: 'Japan', code: '+81', length: 10 },
      { name: 'South Korea', code: '+82', length: 10 },
      { name: 'India', code: '+91', length: 10 },
      { name: 'Pakistan', code: '+92', length: 10 },
      { name: 'Bangladesh', code: '+880', length: 10 },
      { name: 'Indonesia', code: '+62', length: 10 },
      { name: 'Malaysia', code: '+60', length: 9 },
      { name: 'Singapore', code: '+65', length: 8 },
      { name: 'Thailand', code: '+66', length: 9 },
      { name: 'Vietnam', code: '+84', length: 9 },
      { name: 'Philippines', code: '+63', length: 10 },
      { name: 'Brazil', code: '+55', length: 11 },
      { name: 'Argentina', code: '+54', length: 10 },
      { name: 'Mexico', code: '+52', length: 10 },
      { name: 'South Africa', code: '+27', length: 9 },
      { name: 'Nigeria', code: '+234', length: 10 },
      { name: 'Kenya', code: '+254', length: 9 },
      { name: 'New Zealand', code: '+64', length: 9 },
    ];
  }
  onShowCountry() {
    this.country.set(!this.country());
  }

  onSelectCountry(item: Icountry) {
    this.selectedCode.set(item.code);
    this.maxLength.set(item.length);
    this.country.set(false);
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const countryCode = this.selectedCode().replace('+', '');
    if (input.value.startsWith(countryCode)) {
      input.value = input.value.slice(countryCode.length);
    }
    input.value = input.value.replace(/\D/g, '');
    if (input.value.length > this.maxLength()) {
      input.value = input.value.slice(0, this.maxLength());
    }
    const finalPhone = this.selectedCode() + input.value;
    this.phoneNumber.emit(finalPhone);
  }
}
