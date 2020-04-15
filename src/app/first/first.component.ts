import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  private sub_one :string;
  private sub_two :string;
  private sub_three :string;

  constructor() {
    this.sub_one =  'Angular';
    this.sub_two = 'Node';
    this.sub_three = 'MongoDB' ;

  }

  ngOnInit() {
  }

  public getsubone():string{
    return this.sub_one;
  }


  public getsubtwo():string{
    return this.sub_two;
  }

  public getsubthree():string{
    return this.sub_three;
  }

}
