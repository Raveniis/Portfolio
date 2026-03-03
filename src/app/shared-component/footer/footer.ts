import { Component } from '@angular/core';
import { Socials } from '../socials/socials';
import navigationLinks from '../../data/navigationLinks';

@Component({
  selector: 'app-footer',
  imports: [Socials],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();
  navigationLinks = navigationLinks;
}
