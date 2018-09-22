import { Component, OnInit } from '@angular/core';
import {Task} from './task';
import {TasksService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  editTask : Task;

  constructor(private tasksService:TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() : void{
    console.log("getting tasks");
    this.tasksService.getTasks().subscribe(tasks => {
      console.log("inside",tasks);
      this.tasks = tasks;
    });
  }

  add(title:String){
   console.log(title);
    this.editTask = undefined;
    title=title.trim();
    if(!title){
      return;
    }

    const newTask:Task = {description : title} as Task;
    this.tasksService.addTask(newTask).subscribe(task => this.tasks.push(task));
  }

  delete(task:Task) {
    this.tasks = this.tasks.filter(h => h !=task);
    this.tasksService.deleteTask(task._id).subscribe();
  }

  edit(task:Task){
    this.editTask = task;
  
  }

  update(){
    if(this.editTask){
      this.tasksService.updateTask(this.editTask).subscribe(task => {
        const ix = task ? this.tasks.findIndex(h => h._id === task._id):-1;
        if(ix > -1){
          this.tasks[ix] = task;
        }
      });
      this.editTask = undefined;
    }
  }
}
