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

  openSnackbar(text: string, action: string = '', onDismiss: (() => void) | null = null, params = {}) {
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

  openToastAlert(title: string, icon: SweetAlertIcon) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon,
      title,
    });
  }

  isWinterSeason(): boolean {
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so we add 1 to get 1-12
    return currentMonth === 9 || currentMonth === 10 || currentMonth === 11 || currentMonth === 12 || currentMonth === 1;
  }
}
