import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  id!: number;
  title!:string;
  description!:string;
  task: Task = new Task();
  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.taskService.getTaskById(this.id).subscribe(data => {
      this.task = data;
    }, error => console.log(error));
  }

  onSubmit(){
    const data={id:this.id,title:this.title,description:this.description}
    this.taskService.createTask(this.task).subscribe(data => {
      console.log(data);
      this.taskService.goToTaskList();
    },
      error => console.log(error));
  }

  goToTaskList(){
    this.router.navigate(['/tasks']);
  }





}
