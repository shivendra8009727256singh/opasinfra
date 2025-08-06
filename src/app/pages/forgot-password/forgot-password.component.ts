// forgot-password.component.ts (optional)
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-forgot-password',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="forgot-password-container">
      <h2>Reset Password</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input type="email" formControlName="email" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    .forgot-password-container {
      padding: 2rem;
      text-align: center;
    }
    input, button {
      margin-top: 1rem;
      padding: 0.5rem;
    }
  `]
})
export class ForgotPasswordComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
