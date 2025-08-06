import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // 👈 Import this

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,MatIconModule,MatSnackBarModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  
  // 👇 Add these two lines
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder, private router: Router,
  private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,}$/)]],
        email: ['', [Validators.required, Validators.email]],
        country: ['', Validators.required],
        role: ['', Validators.required],
        gst: ['', Validators.required],
        location: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        agree: [false, Validators.requiredTrue]
      },
      { validators: this.matchPasswords }
    );
  }

  matchPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }
  isInvalid(controlName: string): boolean {
  const control = this.registerForm.get(controlName);
  return !!(control && control.invalid && control.touched);
}

isValid(controlName: string): boolean {
  const control = this.registerForm.get(controlName);
  return !!(control && control.valid && control.touched);
}


  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
this.snackBar.open('Registration successful!', 'Close', {
    duration: 3000,
    verticalPosition: 'top',
    panelClass: ['snackbar-success']
  });
    console.log('Register Form Submitted:', this.registerForm.value);
    // TODO: send to backend API
  }
}
