import { Component, OnInit } from '@angular/core';
import { General } from '../general.model';
import {GeneralService} from '../general.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  quizzes :General[]=[];
currentQuiz=0;
answerSelected=false;
correctAnswers=0;
incorrectAnswers=0;
randomize:number;
result = false;

  constructor(private generalService:GeneralService) { }

  ngOnInit(): void {
    this.quizzes=this.generalService.getQuizzes();
    this.randomize = Math.floor(Math.random() * this.quizzes.length);
  }
  onAnswer(option:boolean)
  {
    this.answerSelected =true;
    
    setTimeout(() =>
{
this.currentQuiz++;
this.randomize=Math.floor(Math.random()*this.quizzes.length);
this.answerSelected=false;
},3000);
    
if(option)
{
  this.correctAnswers=this.correctAnswers+1;
}
else{
  this.incorrectAnswers++;
}
  }
showResult(){
  this.result=true;
}



}



