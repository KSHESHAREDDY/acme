import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public pageTitle : String = '';
  public developedBy : String = '';
  ngOnInit(): void {
    this.pageTitle ='Welcome';
    this.developedBy = "SHESHA REDDY"
  }

}
