import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha-2';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
import { AppTheme } from '../../services/app-theme.service';
import { FormGroupDirective } from '@angular/forms';
import { Utils } from '../../utils/utils';
import { MailService } from '../../services/email.service';
import { TrackSectionDirective } from '../../directives/track-section';
import { ScrollViewService } from '../../services/scroll-view.service';
import { MediaQueryService } from '../../services/media-query.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [MaterialModules, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule, TrackSectionDirective],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  @ViewChild('recaptcha') recaptcha!: RecaptchaComponent;
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;
  private scrollService = inject(ScrollViewService);
  private fb = inject(FormBuilder);
  private themeService = inject(AppTheme);
  private cdr = inject(ChangeDetectorRef);
  private utils = inject(Utils);
  private mailService = inject(MailService);
  private mobileQueryService = inject(MediaQueryService)

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  emailForm!: FormGroup;
  theme: ReCaptchaV2.Theme;
  siteKey = environment.googleSiteKey;
  showRecaptcha: boolean = false;
  isSubmitting: boolean = false;
  subscription!: Subscription;
  isMobile$ = this.mobileQueryService.isMobile$;

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

      this.emailForm.get('recaptcha')?.reset();

      this.cdr.detectChanges();
      this.showRecaptcha = true;
    });
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
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
    this.mailService.sendEmail(payload).subscribe({
      next: (response) => {
        this.emailForm.reset();
        this.formDirective.resetForm();
        this.recaptcha.reset();
        this.utils.openAlert('Sent!', 'Email has been sent!', 'success');
        console.log(response);
      },
      error: (err) => {
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      },
    });

    console.log(payload);
  }
}
