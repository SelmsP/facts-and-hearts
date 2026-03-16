import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { Categories } from './categories/categories';
import { TriviaScience } from './trivia-science/trivia-science';
import { TriviaHistory } from './trivia-history/trivia-history';
import { TriviaGeneralknowledge } from './trivia-generalknowledge/trivia-generalknowledge';
import { Heartfelt } from './heartfelt/heartfelt';
import { LearnMore } from './learn-more/learn-more';
import { Profile } from './profile/profile'; 
import { About } from './about/about'; 
import { Contact } from './contact/contact'; 
import { Settings } from './settings/settings'; 
export const routes: Routes = [
  { path:'', component:Landing },
  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'categories', component:Categories },
  { path:'trivia-science', component:TriviaScience },
  { path:'trivia-history', component:TriviaHistory },
   { path:'trivia-generalknowledge', component:TriviaGeneralknowledge },
  { path:'heartfelt', component:Heartfelt },
  { path:'learn-more', component:LearnMore },
   { path:'profile', component:Profile },
 { path:'about', component:About },
  { path:'contact', component:Contact },
  { path:'settings', component:Settings },
];