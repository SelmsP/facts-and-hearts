import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

    onSubmit(): void {
    this.submitted = true;
    this.errorMessage = ''; 

    const storedData = localStorage.getItem('user'); 

    if (!storedData) {
      this.errorMessage = "No account found. Please register first.";
      return;
    }

    if (this.loginForm.invalid) {
      return; 
    }

    try {
      const { username, password } = this.loginForm.value;
      const registeredUser = JSON.parse(storedData);

      if (registeredUser.username === username && registeredUser.password === password) {
        
       
        localStorage.setItem('currentUser', JSON.stringify(registeredUser));
        
        console.log("Login Success!");
        this.router.navigate(['/home']); 
      } else {
        this.errorMessage = "Incorrect username or password.";
      }
    } catch (e) {
      this.errorMessage = "Error loading account data.";
    }
  }

}
