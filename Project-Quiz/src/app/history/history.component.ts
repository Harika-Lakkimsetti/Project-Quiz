import { Component, OnInit } from '@angular/core';
import * as data from "./history.json";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arra:string[]=[];
answer:string[]=[];
history:any[]=(data as any).default;
fin:boolean[]=[];
c:number=0;
rev:string[]=[];
id:number[]=[];
templateForm(value:any,Ans:any,ide:any){
  let b=JSON.stringify(value);
  let s=b.slice(11,-2);
  this.answer.push(Ans);
  this.arra.push(s);
  this.id.push(ide);
  if(s==Ans){
    console.log(s);
    alert("Going great + 1");
    console.log(this.arra);
    this.fin.push(true);
    
 
  }
  else{
    alert("Oops! keep trying to get points");
    console.log(s);
    alert("Correct answer is "+Ans);
    console.log(this.arra);
    this.fin.push(false);
   
   
  } 
  }
  g():any{
    for(let i=0;i<this.fin.length;i++){
      if(this.fin[i]==true){
        this.c=this.c+1;
      }
    }
  }




}
