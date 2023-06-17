import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})

export class TaskManagerComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  tasks: any[] = [
    {name: 'Website', content: 'Xây dựng website',time:'10-01-2016', category: 'Quan trọng',delete:'xóa'},
    {name: 'Dữ liệu', content: 'Cập nhật dữ liệu',time:'11-01-2016', category: 'Công việc',delete:'xóa'},
    {name: 'Hồ sơ', content: 'Bổ sung hồ sơ cá nhân',time:'12-03-2016', category: 'Cá nhân',delete:'xóa'}
  ];
  categories: string[] = ['Quan trọng', 'Công việc', 'Cá nhân'];

  newTask: any = {};
  onDeleteTask(task: any): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  onTaskCompleted(task: any): void {
    task.completed = !task.completed;
  }
  onSubmit() {
    if (!this.newTask.name || !this.newTask.content || !this.newTask.category) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else if (!/^[A-Za-z]+$/.test(this.newTask.name)) {
      alert('Tên công việc chỉ được sử dụng các ký tự A-Z hoặc a-z');
    } else {
      this.tasks.push(this.newTask);
      this.newTask = {};
    }
  }

  resetForm() {
    this.newTask = {};
  }
}
