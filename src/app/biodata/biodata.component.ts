import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.scss']
})
export class BiodataComponent {
  name: string = '';
  login: string = '';
  bio: string = '';
  avatar_url: string = '';
  xname: string = '';
  location: string = '';

  constructor(private router: Router, private http: HttpClient){
    interface UserData {
      login: string;
      name: string;
      avatar_url: string;
      bio: string;
      location: string;
      twitter_username: string;
    }
    console.log(this.router.url);
    let username = this.router.url.substring(1);
    this.http.get<UserData>(`https://api.github.com/users/${username}`).subscribe(data => {
      this.name = data.name;
      this.bio = data.bio;
      this.location = data.location;
      this.xname = data.twitter_username;
      this.login = data.login;
      this.avatar_url = data.avatar_url;
    })
  }
}
