import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruct',
  templateUrl: './instruct.component.html',
  styleUrls: ['./instruct.component.css']
})
export class InstructComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   g(){
    alert("Your issue has been recorded thankyou !!");
  }

}
