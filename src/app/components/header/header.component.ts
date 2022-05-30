import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'TODO APP'
  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    alert("ADD SOMETHING TO A LIST");
  }

  deleteTask() {
    alert("DELETE FROM THE LIST");
  }

  updateTask() {
    alert("UPDATE SOMETHING FROM THE LIST");
  }

}
