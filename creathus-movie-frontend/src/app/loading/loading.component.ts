import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  percentage:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.initilizePercentage();
  }

  initilizePercentage(){
    setInterval(()=>{
      if(this.percentage<100){
        this.percentage++
        console.log(this.percentage++);
      }
    },50)
  }

}
