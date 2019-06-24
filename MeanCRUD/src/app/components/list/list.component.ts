import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/task.service';
import {Task} from '../../task';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private tasks:Task[];
  constructor(private _taskService:TaskService, private router:Router) { }

  ngOnInit() {
    this.readTasks();
  }
  readTasks(){
    this._taskService.readTasks().subscribe(
      data=>{
        console.log(data);
        this.tasks=data['msg'];
      },
      error=>{
        console.log(error);
      }

    );
  }

  doUpdateTask(task){
    this._taskService.setter(task);
    this.router.navigate(['/createupdate']);
  }

  doDeleteTask(task){
    this._taskService.deleteTask(task._id).subscribe(
      data=>{
        this.tasks.splice(this.tasks.indexOf(task),1);
        console.log(data)
      }
      , error=>{
        console.log(error)
      }
    )
  }
}
