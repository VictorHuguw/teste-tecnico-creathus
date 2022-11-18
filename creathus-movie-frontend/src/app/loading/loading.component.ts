import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {

  percentage:number = 0;

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.initilizePercentage();
  }

  
  initilizePercentage(){
    setInterval(()=>{
      if(this.percentage<100){
        this.percentage++
      }
      else{
        this.router.navigate(['home']);
      }
    },50)
  }

}
