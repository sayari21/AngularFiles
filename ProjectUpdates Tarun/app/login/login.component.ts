import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  passWord : string;
  isFormSubmitted : boolean;
  login(loginForm : NgForm) {
    this.isFormSubmitted=false;
    if (loginForm.invalid) {
      return;
    }
    this.isFormSubmitted = true;
    if (this.userName=="Sayari" && this.passWord=="Moon2107") {
     this._router.navigate(['/menu']);
    } else {
      alert("Invalid");
    }
  }
  constructor(private _router : Router) { 
    this.isFormSubmitted=false;
  }

  ngOnInit(): void {
  }

}
