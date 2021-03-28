import { Component, OnInit } from '@angular/core';

import { Science } from '../science.model';
import {ScienceService} from '../science.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
quizzes :Science[]=[];
currentQuiz=0;
answerSelected=false;
correctAnswers=0;
incorrectAnswers=0;
randomize:number;
result = false;
  constructor(private scienceService:ScienceService) { }

  ngOnInit(): void {
    this.quizzes=this.scienceService.getQuizzes();
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
