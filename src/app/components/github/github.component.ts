import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Profile } from 'src/app/profile';
import { Repos } from 'src/app/repos';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profile: Profile[];
  repos: Repos[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void { }

  // tslint:disable-next-line: typedef
  searchProfile(username) {
    this.githubService.updateProfile(username);

    this.githubService.getProfile().subscribe(profile => {
      this.profile = profile;
    });

    this.githubService.getPublicRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
