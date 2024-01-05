import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  id!:number;
  title!:string;
  description!:string;
  task:Task=new Task();

  constructor(private taskService : TaskService){}

  ngOnInit():void
  {}

  // onSubmit() {
  //   console.log(this.task);
  //   this.taskService.saveTask();
  // }

  onSubmit(){

    const data={id:this.id,title:this.title,description:this.description}
    this.taskService.createTask(this.task).subscribe(data => {
      console.log(data);
      this.taskService.goToTaskList();
    },
      error => console.log(error));
  }





}
