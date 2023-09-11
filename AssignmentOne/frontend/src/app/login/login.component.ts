import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // add router to constructor
  constructor(private router: Router) {}

  login() {
    const fakeUsers = JSON.parse(localStorage.getItem('fakeUsers') || '[]');
    const user = fakeUsers.find(
      (u: any) => u.username === this.username && u.password === this.password
    );
  
    if (user) {
      alert('login success!');
  
      // Store the entire user object in local storage
      localStorage.setItem('currentUser', JSON.stringify(user));
  
      this.router.navigate(['/chat']);
    } else {
      alert('invalid username or password');
    }
  }
  
}
