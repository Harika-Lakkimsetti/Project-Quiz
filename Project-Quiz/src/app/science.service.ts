import { Injectable } from '@angular/core';
import {Science} from './science.model';
@Injectable({
  providedIn: 'root'
})
export class ScienceService {
  quizzes=[
    {
      question:'What does DNA stand for?',
      answer:[
        {option:'Detoxyribonucleic acid',correct:false},
        {option:'Decarbonucleic acid',correct:false},
        {option:'Deoxyribonucleic acid',correct:true},
      ]
    },
    {
      question:'How many bones are in the human body?',
      answer:[
        {option:'260',correct:false},
        {option:'216',correct:false},
        {option:'206',correct:true},
      ]
    },
    {
      question:'The concept of gravity was discovered by which famous physicist?',
      answer:[
        {option:'Sir Isaac Newton',correct:true},
        {option:'Stephe Hakings',correct:false},
        {option:'Sheksphre',correct:false},
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
      question:'Humans and chimpanzees share roughly how much DNA?',
      answer:[
        {option:'93%',correct:false},
        {option:'94%',correct:false},
        {option:'98%',correct:true},
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
      question:'How many vertebrae does the average human possess ?',
      answer:[
        {option:'32',correct:false},
        {option:'34',correct:false},
        {option:'33',correct:true},
      ]
    },
    {
      question:'How many teeth does an adult human have ?',
      answer:[
        {option:'32',correct:true},
        {option:'31',correct:false},
        {option:'30',correct:false},
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
