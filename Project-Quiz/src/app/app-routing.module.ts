import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent} from './quiz/quiz.component';
import { InstructComponent} from './instruct/instruct.component';
import { StartComponent } from './start/start.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { ScienceComponent } from './science/science.component';
import { MathComponent } from './math/math.component';
import { GeneralComponent } from './general/general.component';
import { HistoryComponent } from './history/history.component';
const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'instruct', component: InstructComponent },
  {
    path:'start',component:StartComponent
  },
  {
    path:'guide',component:GuideComponent
  },
  {
    path:'',component:HomeComponent
  },{
    path:'science',component:ScienceComponent
  },
  {
    path:'math',component:MathComponent
  },
  {
    path:'general',component:GeneralComponent
  },
  {
    path:'history',component:HistoryComponent
  }
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
