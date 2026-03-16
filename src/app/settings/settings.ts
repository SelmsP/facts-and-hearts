import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css']
})
export class Settings {

  settings = {
    notifications: true,
    darkMode: true,
    publicProfile: false,
    emailUpdates: true
  };

  saveSettings() {
    console.log('Settings saved:', this.settings);
    alert('Your preferences have been updated! ⚙️');
  }
}
