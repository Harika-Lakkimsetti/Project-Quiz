import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { InstructComponent } from './instruct/instruct.component';
import { GuideComponent } from './guide/guide.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { BackgroundDirective } from './background.directive';
import { MathComponent } from './math/math.component';
import { FormsModule } from '@angular/forms';
import { GeneralComponent } from './general/general.component';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    InstructComponent,
    GuideComponent,
    StartComponent,
    HomeComponent,
    ScienceComponent,
    BackgroundDirective,
    MathComponent,
    GeneralComponent,
    HistoryComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
