import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs'
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false
  showAddTask! : boolean;
  subscription! : Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }
    ngOnInit() { }

    onSubmit() {
      if (!this.text) {
        alert('Field should not be empty')
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      // event emiting
      this.onAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
