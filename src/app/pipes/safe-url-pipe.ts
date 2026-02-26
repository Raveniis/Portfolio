import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value as string);
  }

}
