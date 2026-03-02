import { Component } from '@angular/core';
import { Socials } from '../socials/socials';

@Component({
      selector: 'app-footer',
      imports: [Socials],
      templateUrl: './footer.html',
})
export class Footer {
      currentYear = new Date().getFullYear();
}
