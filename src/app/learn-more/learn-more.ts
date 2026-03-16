import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './learn-more.html',
  styleUrl: './learn-more.css'
})
export class LearnMore {}
