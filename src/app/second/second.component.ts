import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  private sub_four :string;
  constructor() {
    this.sub_four = 'Fire Base data soon..' ;
  }

  ngOnInit() {
  }

}
