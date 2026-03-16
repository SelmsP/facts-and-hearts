import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  
  constructor(private router: Router) {}

  
  navigateToCategories(mode: string) {
    this.router.navigate(['/categories'], { queryParams: { mode: mode } });
     this.router.navigate(['/heartfelt'], { queryParams: { mode: mode } });
  }
}
