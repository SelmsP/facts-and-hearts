import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], 
  templateUrl: './quiz.html', 
  styleUrl: './quiz.css'
})
export class Quiz implements OnInit {
  questions: any[] = []; 
  currentIndex = 0; 
  score = 0;
  isLoading = true;

 
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router
  ) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    this.fetchQuestions(category);
  }

  
  fetchQuestions(category: string | null) {
    this.isLoading = true;
    
  
    const catId = category ? category : '9';
    const url = `https://opentdb.com{catId}&type=multiple`;

    this.http.get<any>(url).subscribe({
      next: (data) => {
        if (data.response_code === 0) {
          this.questions = data.results;
        }
        this.isLoading = false;
        console.log("Loaded Questions:", this.questions);
      },
      error: (err) => {
        console.error("API Error:", err);
        this.isLoading = false;
      }
    });
  }

  selectAnswer(answer: string) {
    if (!this.questions[this.currentIndex]) return;


    const correct = this.questions[this.currentIndex].correct_answer;

    if (answer === correct) {
      this.score++;
    }

    this.currentIndex++;

    if (this.currentIndex >= 10 || this.currentIndex >= this.questions.length) {
      this.router.navigate(['/score'], { state: { score: this.score } });
    }
  }
}
