import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!: FormGroup;


  constructor(private fb:FormBuilder, private router:Router){

  }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signUp(){
    if (this.signUpForm.valid) {
      console.log('Form Submitted', this.signUpForm.value);
      this.router.navigate(['auth/sign-in'])
    } else {
      console.log('Form is invalid');
    }
  }
}
