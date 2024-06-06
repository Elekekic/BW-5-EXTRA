import { Component } from '@angular/core';
import { SignUp } from 'src/app/interfaces/sign-up';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userReg!: SignUp

  constructor(private authSrv: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    try {
      this.authSrv.signup(form.value).subscribe();
      this.router.navigate(['/login'])
    } catch (error) {
      console.error(error);
    }
  }
}
