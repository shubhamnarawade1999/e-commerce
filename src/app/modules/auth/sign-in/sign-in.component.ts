import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm!: FormGroup;

  constructor(private fb: FormBuilder ,private router:Router ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  SignIn(): void {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
      this.router.navigate(['user/home'])
    } else {
      console.log('Form is invalid');
    }
  }
  
  
}
