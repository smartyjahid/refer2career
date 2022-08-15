import { ToastService } from 'src/app/shared/services/toast.service';
import { DbOperation } from './../shared/models/dbOperation';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRole } from 'src/app/shared/models/enums';
import { AuthService } from 'src/app/shared/services/auth.service';

import { timer } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { Location } from '@angular/common';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {

  isEmployer = false;

  isSignUp = false;
  isLoginCard = true;

  otp = '';
  isOTPCorrect = true;
  timer: number;
  isVerified = false;

  isForgotPassOTP = false;

  isResetPassword = false;

  isServiceRunning = false;

  role = UserRole;
  isVerifyOTP = false;
  isLogin = true;
  isRegistration = false;
  isForgotPassword = false;
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  signupForm: FormGroup;
  loginForm: FormGroup;
  password = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  resetPassword = new FormControl('', [Validators.required, Validators.minLength(7)]);

  message = '';

  isPasswordReset = false;

  constructor(
    public modalRef: BsModalRef,
    private authService: AuthService,
    private router: Router,
    private routing: ActivatedRoute,
    private toast: ToastService,
    private modalService: BsModalService,
    private location: Location,
  ) {

  }

  isScreenBig = false;
  socialUser: any = {};

  ngOnInit() {
    this.routing.params.subscribe((params: Params) => {
      if (params.user) {
        this.isServiceRunning = true;
        this.socialUser = params.user;
        const db: DbOperation = {
          collection: 'users',
          query: { providerId: this.socialUser }
        };
        this.authService.find(db).subscribe((data: any) => {
          if (data.data) {
            if (data.data.length > 0) {
              window.localStorage.setItem('id', window.btoa(JSON.stringify(data.data[0])));
              window.location.reload();
              this.isServiceRunning = false;
            }
          }
          else {
            this.toast.showToast('Something Went Wrong!', 'bg-danger');
            setTimeout(() => {
              window.open('https://refer2career.com/', '_self');
            }, 3000);
          }
        });
      }
    });
    if (window.screen.width > 1150) { this.isScreenBig = true; }
    else { this.isScreenBig = false; }
    this.initializeSignupForm();
    this.loginForm = new FormGroup({
      emailLogin: new FormControl(null, [Validators.required, Validators.email]),
      passwordLogin: new FormControl(null, [Validators.required]),
    });
  }

  hideEmployerpahe() {
    this.loginVisible();
    setTimeout(() => { this.isEmployer = false; }, 500);
  }

  resendOTP() {
    this.isServiceRunning = true;
    this.authService.getOTP({ email: this.signupForm.get('email').value ? this.signupForm.get('email').value : this.email.value })
    .subscribe((data: any) => {
      if (data.data === true) {
        this.toast.showToast('Passcode Sent Successfully!');
        let counter = 30;
        timer(1000, 1000)
          .pipe(
            takeWhile(() => counter > 0),
            tap(() => counter--)
          )
          .subscribe(() => {
            this.timer = counter;
          });
        this.isServiceRunning = false;
      }
    });
  }

  isValidOTP() {
    return this.otp.length === 6;
  }

  onOtpChange($event) {
    this.otp = $event;
  }

  forgotPasswordVisible() {
    this.hideAll();
    this.isForgotPassword = true;
  }

  goToLogin() {
    this.hideAll();
    this.isLogin = true;
  }

  goToSignUp() {
    this.hideAll();
    this.isSignUp = true;
  }

  registrationVisible() {
    setTimeout(() => {
      this.hideAll();
      this.initializeSignupForm();
      this.isRegistration = true;
    }, 300);
  }

  loginVisible() {
    setTimeout(() => {
      this.hideAll();
      this.isLogin = true;
      this.isLoginCard = true;
    }, 300);
  }

  showLogin() {
    this.hideAll();
    this.isForgotPassword = false;
    this.isLogin = true;
    this.isLoginCard = false;
  }

  hideAll() {
    this.isResetPassword = false;
    this.isLogin = false;
    this.isRegistration = false;
    this.isForgotPassword = false;
    this.isVerifyOTP = false;
    this.isPasswordReset = false;
    this.message = '';
    this.isSignUp = false;
    this.signupForm.reset();
    this.loginForm.reset();
  }

  initializeSignupForm() {
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  registerCandidate() {
    this.signupForm.markAllAsTouched();
    if (this.signupForm.valid) {
      this.isServiceRunning = true;
      const candidate: any = {
        user: {
          cId: new Date().getTime(),
          name: this.signupForm.get('name').value,
          email: (this.signupForm.get('email').value).toLowerCase(),
          password: this.signupForm.get('password').value,
          role: UserRole.CANDIDATE,
          verified: false,
          time: new Date(),
        },
      };
      this.authService.registerCandidate(candidate).subscribe((data: any) => {
        if (data.error) {
          this.message = data.error;
        }
        else {
          this.hideAll();
          this.isVerifyOTP = true;
          let counter = 30;
          timer(1000, 1000)
            .pipe(
              takeWhile(() => counter > 0),
              tap(() => counter--)
            )
            .subscribe(() => {
              this.timer = counter;
            });
        }
        this.isServiceRunning = false;
      });
    }
    else {
      if (!this.signupForm.get('email').valid) {
        this.toast.showToast('Enter valid email!', 'bg-danger');
      }

      else if (!this.signupForm.get('name').valid) {
        this.toast.showToast('Enter name!', 'bg-danger');
      }

      else if (!this.signupForm.get('password').valid) {
        this.toast.showToast('Password atleast contain 6 characters!', 'bg-danger');
      }
    }
  }

  verifyOTP() {
    this.isServiceRunning = true;
    if (this.isForgotPassOTP) {
      const data = {
        email: this.email.value,
        otp: this.otp
      };
      this.authService.verify(data).subscribe((res: any) => {
        if (res.data === true) {
          this.isVerified = true;
          this.hideAll();
          this.isResetPassword = true;
        }
        else { this.isOTPCorrect = false; }
        this.isServiceRunning = false;
      });
    }
    else {
      const data = {
        email: this.signupForm.get('email').value,
        otp: this.otp
      };
      this.authService.verifyOTP(data).then((res: any) => {
        if (res.data === true) {
          this.isVerified = true;
          this.hideAll();
          this.isLogin = true;
        }
        else { this.isOTPCorrect = false; }
        this.isServiceRunning = false;
      });
    }
  }

  back() {
    this.hideAll();
    this.isLogin = true;
  }

  login() {
    if (this.loginForm.valid) {
      this.isServiceRunning = true;
      this.authService.login({
        email: (this.loginForm.get('emailLogin')
          .value).toLowerCase(), password: this.loginForm.get('passwordLogin').value
      })
        .then((data: any) => {
          if (data.error) {
            this.message = 'Invalid email or password!';
          }
          else if (data.email) {
            this.modalRef.hide();
            window.location.reload();
            window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
          }
          else { this.message = 'User not found!'; }
          this.isServiceRunning = false;
        });
    }
  }

  linkedinLogin() {
    window.open('https://refer2career.com/linkedin', '_self');
    // this.authService.linkedInLogin().subscribe(data => {
    // });
  }

  googleLogin() {
    window.open('https://refer2career.com/google', '_self');
    // this.authService.linkedInLogin().subscribe(data => {
    // });
  }

  facebookLogin() {
    window.open('https://instajobapp.herokuapp.com/facebook', '_self');
    // this.authService.linkedInLogin().subscribe(data => {
    // });
  }


  forgotPassword() {
    if (this.email.valid) {
      this.isServiceRunning = true;
      this.authService.getOTP({ email: this.email.value }).subscribe((data: any) => {
        if (data.data === true) {
          this.hideAll();
          this.isVerifyOTP = true;
          let counter = 30;
          timer(1000, 1000)
            .pipe(
              takeWhile(() => counter > 0),
              tap(() => counter--)
            )
            .subscribe(() => {
              this.timer = counter;
            });
          this.isForgotPassOTP = true;
        }
        this.isServiceRunning = false;
      });
    }
    else { this.toast.showToast('Enter valid email', 'bg-danger'); }
  }

  restPassword() {
    this.resetPassword.markAsTouched();
    if (this.resetPassword.value) {
      const dbopeartion: DbOperation = {
        collection: 'users',
        data: { password: this.resetPassword.value },
        query: { email: this.email.value }
      };
      this.authService.update(dbopeartion).then((data: any) => {
        if (data.data === true) {
          this.hideAll();
          this.toast.showToast('Password Reseted!');
          this.isLogin = true;
          this.isServiceRunning = false;
        }
      });
    }
  }

  navigate(){
    
  }
}
