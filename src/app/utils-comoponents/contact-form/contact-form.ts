import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { AppTheme } from '../../services/app-theme.service';
import { DataService } from '../../services/data.service';
import { FormGroupDirective } from '@angular/forms';
import { Utils } from '../../services/utils';

@Component({
  selector: 'app-contact-form',
  imports: [MaterialModules, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  @ViewChild('recaptcha') recaptcha!: RecaptchaComponent;

  private fb = inject(FormBuilder);
  private themeService = inject(AppTheme);
  private cdr = inject(ChangeDetectorRef);
  private ds = inject(DataService);
  private utils = inject(Utils);

  emailForm!: FormGroup;
  theme: ReCaptchaV2.Theme;
  siteKey = environment.googleSiteKey;
  showRecaptcha: boolean = false;
  isSubmitting: boolean = false;
  subscription!: Subscription;

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

  ngOnInit() {
    this.subscription = this.themeService.currentTheme$.subscribe((currentTheme) => {
      this.showRecaptcha = false;
      this.theme = currentTheme ? (currentTheme as ReCaptchaV2.Theme) : this.theme;

      this.cdr.detectChanges();
      this.showRecaptcha = true;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  copyEmail(text: string) {
    this.utils.copyTextToClipboard(text);
  }
  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSubmit() {
    if (this.isSubmitting) return;
    this.isSubmitting = true;

    const payload = this.emailForm.value;
    this.ds.fetchData('POST', 'email/send', '', payload).subscribe({
      next: (response) => {
        this.emailForm.reset();
        this.formDirective.resetForm();
        this.recaptcha.reset();
        this.utils.openAlert('Sent!', 'Email has been sent!', 'success');
        console.log(response);
      },
      error: (err) => {},
      complete: () => {
        this.isSubmitting = false;
      },
    });

    console.log(payload);
  }
}
