import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {


  private apiUrl = environment.baseUrl
    constructor(private http: HttpClient) { }
  joinedDate: any

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  sortUsers(users: any[], criteria: string): any[] {
    return users.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  }


  filterUsersByDate(users: any[], dateRange: any): any[] {
    if (!dateRange || !dateRange.from || !dateRange.to) {
      return users;
    }

    return users.filter(user => {
      console.log("join_date", user.join_date);

      const datatime = new Date(user.join_date);
      const datePipe = new DatePipe('en-US');
      this.joinedDate = datePipe.transform(datatime, 'yyyy-MM-dd');


      console.log("joinedDate", this.joinedDate);

      return this.joinedDate >= dateRange.from && this.joinedDate <= dateRange.to;
    });
  }

  removeUser(users: any[], userId: string): any[] {
    return users.filter(user => user.uid !== userId);
  }
}
