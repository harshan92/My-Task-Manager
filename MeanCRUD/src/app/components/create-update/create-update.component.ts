import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../shared/task.service';
import { Task } from '../../task';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  private task: Task;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.task = this.taskService.getter();
  }

  createOrUpdate() {
    if (this.taskService.getter()._id == undefined) {
      this.taskService.createTask(this.task).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.taskService.updateTask(this.task).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
