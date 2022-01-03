import { Component, OnInit } from '@angular/core';
import {SpringService} from '../spring.service'
import { User } from '../user';

@Component({
  selector: 'app-private-site',
  templateUrl: './private-site.component.html',
  styleUrls: ['./private-site.component.css']
})
export class PrivateSiteComponent implements OnInit {

  users: User[] = [];

  constructor(private springService: SpringService) { }

  ngOnInit(): void {
    this.springService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
