import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  users: string[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.githubService.getData().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
