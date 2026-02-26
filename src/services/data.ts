import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private http = Inject(HttpClient);

  downloadFile(endpoint: string) {
    this.http.get(endpoint, { responseType: 'blob' }).subscribe((blob: Blob | MediaSource) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'downloaded-file';
      link.click();
    });
  }
}
