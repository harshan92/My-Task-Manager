import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TaskService} from '../../shared/task.service';
import {Task} from '../../task';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private taskService:TaskService) { }

  ngOnInit() {
  }

  newTask(event:any){
    event.preventDefault();
    this.taskService.setter(new Task());
    this.router.navigate(['/createupdate']);
  }

}
