import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DelegatorService {
  host = environment.host;
  constructor(private httpClient: HttpClient) { }

  post(url: string, json: any) {
    return this.httpClient.post(this.host + url, json);
  }
}
