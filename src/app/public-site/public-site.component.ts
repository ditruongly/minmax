import { Component, OnInit } from '@angular/core';
import {SpringService} from '../spring.service'
import { User } from '../user';

@Component({
  selector: 'app-public-site',
  templateUrl: './public-site.component.html',
  styleUrls: ['./public-site.component.css']
})
export class PublicSiteComponent implements OnInit {

  users: User[] = [];

  constructor(private springService: SpringService) { }

  ngOnInit(): void {
    this.springService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
