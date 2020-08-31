import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: any[];
  repos: any[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getProfile().subscribe(profile => {
      this.profile = profile;
    });

    this.githubService.getPublicRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
