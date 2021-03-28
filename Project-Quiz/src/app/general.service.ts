import { Injectable } from '@angular/core';
import {General} from'./general.model';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  quizzes=[
    {
      question:'Grand Central Terminal, Park Avenue, New York is the world ?',
      answer:[
        {option:'lightest railway station',correct:false},
        {option:'longest railway station',correct:false},
        {option:'largest railway station',correct:true},
      ]
    },
    {
      question:'Entomology is the science that studies ?',
      answer:[
        {option:'reptiles',correct:false},
        {option:'birds',correct:false},
        {option:'Insects',correct:true},
      ]
    },
    {
      question:'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of ?',
      answer:[
        {option:'Africa',correct:true},
        {option:'India',correct:false},
        {option:'Dubai',correct:false},
      ]
    },
    {
      question:'What is the hardest natural substance on Earth?',
      answer:[
        {option:'Diamond',correct:true},
        {option:'wood',correct:false},
        {option:'graphite',correct:false},
      ]
    },
    {
      question:'Garampani sanctuary is located at ?',
      answer:[
        {option:'Kohima, Nagaland',correct:false},
        {option:'Gangtok, Sikkim',correct:false},
        {option:'Diphu, Assam',correct:true},
      ]
    },
    {
      question:'At what temperature are Celsius and Fahrenheit equal?',
      answer:[
        {option:'-30',correct:false},
        {option:'-40',correct:true},
        {option:'-20',correct:false},
      ]
    },
    {
      question:'Hitler party which came into power in 1933 is known as ?',
      answer:[
        {option:'party party',correct:false},
        {option:'	Ku-Klux-Klan',correct:false},
        {option:'Nazi Party',correct:true},
      ]
    },
    {
      question:' FFC stands for ?',
      answer:[
        {option:'Film Finance Corporation',correct:true},
        {option:'Fire Finance Corporation',correct:false},
        {option:'Fog Finance Corporation',correct:false},
      ]
    },
    {
      question:'What is the study of mushrooms called?',
      answer:[
        {option:'monocology',correct:false},
        {option:'Mycology',correct:true},
        {option:'mythology',correct:false},
      ]
    },
    {
      question:'Which oath of ethics taken by doctors is named after an Ancient Greek physician?',
      answer:[
        {option:'Hyppocratic Oath',correct:false},
        {option:'pocratic Oath',correct:false},
        {option:'Hippocratic Oath',correct:true},
      ]
    }
  ]


  constructor() { }
  getQuizzes()
  {
    return this.quizzes;
  }
}
