import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

type RequestType = 'GET' | 'POST';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  public fetchData(type: RequestType, endpoint: string, params: string = '', payload: object = {}) {
    switch (type) {
      case 'GET':
        return this.http.get<any>(this.apiUrl + endpoint + params, { withCredentials: true });
      case 'POST':
        return this.http.post<any>(this.apiUrl + endpoint + params, { payload }, { withCredentials: true });
    }
  }
}
