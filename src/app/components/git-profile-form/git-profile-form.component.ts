import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/profile';

@Component({
  selector: 'app-git-profile-form',
  templateUrl: './git-profile-form.component.html',
  styleUrls: ['./git-profile-form.component.css']
})
export class GitProfileFormComponent implements OnInit {

  @Output() searchProfile = new EventEmitter<string>();

  username = '';

  // tslint:disable-next-line: typedef
  submitUser() {
    this.searchProfile.emit(this.username);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
