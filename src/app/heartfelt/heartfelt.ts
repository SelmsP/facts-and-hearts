import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heartfelt',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './heartfelt.html',
  styleUrl: './heartfelt.css',
})
export class Heartfelt implements OnInit {
  questions: any[] = [];
  current: number = 0;
  isLoading: boolean = true;
  
  
  showWelcome: boolean = true; 
  quizFinished: boolean = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.fetchHeartfelt();
  }

  fetchHeartfelt() {
    this.isLoading = true;
    this.http.get<any[]>('https://heartfelt-api-1.onrender.com/api/heartfelts')
      .subscribe({
        next: (data) => {
          this.questions = data.sort(() => Math.random() - 0.5); 
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: () => { this.isLoading = false; }
      });
  }

  
  startExploring() {
    this.showWelcome = false;
    this.cdr.detectChanges();
  }

  nextQuestion() {
    if (this.current + 1 < this.questions.length) {
      this.current++;
    } else {
      this.quizFinished = true;
    }
    this.cdr.detectChanges();
  }
}
