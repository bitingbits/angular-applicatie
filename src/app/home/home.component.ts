import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  colorToggle: boolean = false;
  otherColors = ['green', 'pink', 'brown', 'purple'];

  constructor() { }

  ngOnInit() {
  }

  addColor(color: string){
    if(color)
      this.otherColors.push(color);
  }

}
