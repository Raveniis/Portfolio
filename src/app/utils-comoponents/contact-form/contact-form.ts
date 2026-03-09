import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [MaterialModules, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  fb = inject(FormBuilder);
  emailForm!: FormGroup;

  constructor() {
    this.emailForm = this.fb.group({
      name: ['', [Validators.max(64)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(256)]],
      recaptcha: ['', [Validators.required]],
    });
  }
}
