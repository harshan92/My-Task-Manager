import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private task:Task;
  private baseUri="http://localhost:8080";
  private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createTask(task:Task){
    return this.http.post(this.baseUri+'/create',task,{headers:this.headers});
  }

  readTasks(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }

  updateTask(task:Task){
    return this.http.put(this.baseUri+'/update',task,{headers:this.headers});
  }

  deleteTask(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }

  setter(task:Task){
    this.task=task;
  }

  getter(){
    return this.task;
  }
}
