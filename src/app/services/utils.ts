import { inject, Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  private snackbar = inject(MatSnackBar);
  private clipboard = inject(Clipboard);

  copyTextToClipboard(text: string) {
    this.clipboard.copy(text);
    this.openSnackbar('Text has been Copied!');
  }

  //private for now...
  private openSnackbar(text: string, action: string = '', onDismiss: (() => void) | null = null, params = {}) {
    const snackbarRef = this.snackbar.open(text, action, {
      duration: 3000,
      horizontalPosition: 'center',
      ...params,
    });

    if (!onDismiss) return;

    snackbarRef.afterDismissed().subscribe((res) => onDismiss());
  }

  openAlert(title: string, text: string, icon: SweetAlertIcon) {
    Swal.fire({
      title,
      text,
      icon,
      timer: 2500,
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }
}
