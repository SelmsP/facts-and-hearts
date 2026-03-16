import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Kinahanglan ang Router

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile implements OnInit {
  userData: any = null;

  constructor(private router: Router) {} // I-inject ang Router diri

  ngOnInit(): void {
    // Kuhaon ang session data inig load sa page
    const sessionData = localStorage.getItem('currentUser');

    if (sessionData) {
      this.userData = JSON.parse(sessionData);
    } else {
      // Kung walay session, i-kick sa landing o login
      this.router.navigate(['/']); // '/' ang landing page base sa imong routes
    }
  }

  // MAO NI ANG CODE PARA SA LOGOUT
  logout(): void {
    // 1. Tangtangon ang session data sa browser
    localStorage.removeItem('currentUser');

    // 2. I-redirect ang user balik sa Landing Page
    // Base sa imong routes screenshot kaganina, ang '' kay Landing
    this.router.navigate(['/']); 
    
    console.log("Logged out successfully");
  }
}
