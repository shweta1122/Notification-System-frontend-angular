import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private http: HttpClient) { }


  public sendNotofication(data) {
    return this.http.post("http://localhost:8080/", data,
  { responseType: 'text' as 'json' })
  }

  public getNotofication() {
    return this.http.get("http://localhost:8080/")
  }

  public ClearNotification(task) {
    return this.http.post("http://localhost:8080/delete", task)
  }
}
