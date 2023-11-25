import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

interface Repo2 {
  name: string;
  description: string;
  languages_url: string[];
}

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.scss']
})
export class RepolistComponent { 
  repolist: Repo2[] = [];
  page: number = 1;
  currentlist: Repo2[] = [];
  perpage: number = 10;

  constructor(private router: Router, private http: HttpClient){
    interface Repo {
      name: string,
      description: string,
      languages_url: string
    }
    console.log(this.router.url);
    let username = this.router.url.substring(1);
    this.http.get<Repo[]>(`https://api.github.com/users/${username}/repos`).subscribe(data => {
      for(let i = 0; i<data.length; i++){
        let language: string[] = [];
        this.http.get<Object>(data[i].languages_url).subscribe(data2 => {
          language.push(...Object.keys(data2));
          
          this.repolist.push({
            name: data[i].name,
            description: data[i].description,
            languages_url: language,
          })
          if(this.currentlist.length < this.perpage){
            this.currentlist.push(this.repolist[this.currentlist.length])
            // console.log(this.currentlist);
            
          }
        })
      }
    })
  }

  onPageforward(event: Event): void{
    const buttonName = (event.target as HTMLButtonElement).name;
    console.log(buttonName);
    this.currentlist = [];
    if(buttonName == '<'){
      if(this.page != 1) this.page = this.page - 1;
    }else if(buttonName == '>'){
      if(this.page != 10) this.page = this.page + 1;
    }else{
      this.page = Number(buttonName);
    }
    for(let i = (this.page - 1) * 10; i<Math.min(this.repolist.length, (this.page - 1) * 10 + 10); i++){
      this.currentlist.push(this.repolist[i])
      // console.log(this.currentlist);
    }
  }
}
