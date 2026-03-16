import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  
 
  categoriesList = [
    { id: '9', name: 'General Knowledge', icon: '🧠' },
    { id: '17', name: 'Science & Nature', icon: '🧪' },
    { id: '23', name: 'History', icon: '📜' },
  ];

 
  constructor(private router: Router) {}

  
  selectCategory(id: string) {
   
    this.router.navigate(['/quiz', id]);
  }
}
