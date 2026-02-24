import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient)

  public fetchLocalData(endpoint: string) {
    return this.http.get<any>('./data/' + endpoint)
  }
}
