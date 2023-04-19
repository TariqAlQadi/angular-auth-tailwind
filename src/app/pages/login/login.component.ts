import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.nonNullable.group({
    email: ['abc@def', [Validators.required, Validators.email]],
    password: ['1234', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

  createAccount() {
    console.log(this.loginForm.value);
  }
}
