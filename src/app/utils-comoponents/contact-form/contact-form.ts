import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-form',
  imports: [MaterialModules, ReactiveFormsModule, RecaptchaModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  fb = inject(FormBuilder);
  emailForm!: FormGroup;
  theme: ReCaptchaV2.Theme = 'light';

  constructor() {
    const storedTheme = sessionStorage.getItem('theme');
    this.theme = storedTheme ? (storedTheme as ReCaptchaV2.Theme) : 'light';

    this.emailForm = this.fb.group({
      name: ['', [Validators.max(64)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(256)]],
      recaptcha: ['', [Validators.required]],
    });
  }

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() {
    const payload = this.emailForm.value;
    console.log(payload);
  }
}
