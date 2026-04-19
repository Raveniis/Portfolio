import { inject, Injectable } from '@angular/core';
import { Api } from '../utils/api';

@Injectable({ providedIn: 'root' })
export class MailService {
  private api = inject(Api);

  sendEmail(payload: Mail) {
    return this.api.fetchData('POST', 'mailer/send-email', '', payload);
  }
}
