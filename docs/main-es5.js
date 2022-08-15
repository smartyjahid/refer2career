(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+WbM":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-job-post/job-details/job-details.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WbM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"overflow-auto\">\n  <div class=\"bg-lightest-blue wh-100 overflow-x-hidden\" style=\"overflow-y: auto; \">\n    <div class=\"row justify-content-center px-1\" *ngIf=\"!isServiceRunning\">\n      <div class=\"card shadow-lg p-3 border-8 m-3 col-sm-8 \"\n        style=\"margin-top: 30px !important; border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\n\n        <div class=\"row justify-content-between\" style=\"height: fit-content;\">\n          <div class=\"d-flex flex-wrap ml-3\">\n            <div class=\"mr-3 mb-2\">\n              <span>\n                <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\n                  style=\"max-height: 70px; max-width: 160px; min-height: 70px; min-width: 70px;border-color: black;\">\n              </span>\n            </div>\n            <div class=\"text-left\">\n              <h4>{{jobPost.jobPost.title}}</h4>\n              <div class=\"column\">\n                <div class=\"d-flex vertical-center flex-wrap\">\n                  <div class=\" vertical-center justify-content-start mr-3\">\n                    <span class=\"material-icons-outlined  mr-2 text-navy-blue\">work</span>\n                    <span class=\" text-lato text-navy-blue d-inline\">Experience : </span>\n                    <span class=\"text-lato text-navy-blue\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\n                      ''\n                      }}\n                      years</span>\n                  </div>\n\n                  <div class=\" vertical-center justify-content-start mr-3\">\n                    <span class=\"material-icons  mr-2 text-navy-blue\">business</span>\n                    <span class=\" text-lato text-navy-blue d-inline\">Company : </span>\n                    <span class=\" text-lato text-navy-blue\">&nbsp; {{jobPost.jobPost.companyName}}</span>\n                  </div>\n                </div>\n                <div class=\"d-flex flex-wrap mt-1\">\n                  <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\n                    class=\" vertical-center justify-content-start mr-2\">\n                    <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">location_on</span>\n                    <span class=\" text-lato text-smd text-navy-blue\">&nbsp;{{jobPost.jobPost.location}}</span>\n                  </div>\n\n                  <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\n                    class=\" vertical-center justify-content-start mr-2\">\n                    <span class=\"material-icons-outlined text-md  mr-2 text-navy-blue\">home</span>\n                    <span class=\" text-lato text-smd text-navy-blue d-inline\">Work from home</span>\n                  </div>\n                  <div class=\"vertical-center justify-content-start mr-2\">\n                    <span class=\"material-icons-outlined text-navy-blue text-md mr-2\">play_arrow</span>\n                    <span class=\"text-smd text-lato text-navy-blue d-inline\">Start Date : </span>\n                    <span class=\"text-lato text-navy-blue\">&nbsp; {{getStartDate(jobPost.jobPost.startDate) ?\n                      (jobPost.jobPost.startDate | date:\n                      'dd MMMM yyyy' ) : 'Immediately'}}</span>\n                  </div>\n                </div>\n                <div class=\"d-flex flex-wrap mt-1\">\n                  <div class=\"vertical-center justify-content-start mr-2\">\n                    <span class=\"material-icons-outlined text-navy-blue mr-2\">payments</span>\n                    <span class=\"text-smd text-lato text-navy-blue d-inline\">{{jobPost.jobPost.jobInternship === 'Job' ?\n                      'Salary'\n                      :\n                      'Stipend'}}\n                      :\n                    </span>\n                    <span class=\"text-lato text-navy-blue\">&nbsp; &#8377; {{jobPost.jobPost.salary}}\n                      {{jobPost.jobPost.salaryType}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"mr-2 ml-3 justify-content-right\">\n            <div class=\"text-right pt-2\">\n              <span class=\"px-2 py-1 text-navy-blue bg-lightest-blue mr-2 border-6 text-lato text-slmd\n        badge badge-light\">{{jobPost.jobPost.jobInternship}}</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-end pt-2\">\n          <span *ngIf=\"role !== 2\" class=\"d-block text-right material-icons text-primary my-2 text-link\"\n            (click)=\"editJobPost()\">edit</span>\n        </div>\n      </div>\n      <div class=\"card shadow-lg p-3 border-8 mb-3 ml-3 mr-3 col-sm-8\"\n        style=\"border-radius: 7px; overflow-y: auto !important; overflow-x: hidden; border: 1px solid #cccccc;\">\n        <div>\n          <span class=\"text-black semi-bold myfont-size d-block mt-3\">About {{jobPost.jobPost.companyName}}</span>\n          <span class=\"text-break text-grey\">{{jobPost.jobPost.aboutUs}}</span>\n        </div>\n        <div>\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Skills Required</span>\n          <div class=\"d-inline m-2\" style=\"display: inline-block !important;\" *ngFor=\"let skill of skills\">\n            <span *ngIf=\"skill.skillName\"\n              class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm\"\n              style=\"border-radius: 6px; margin: 8px;\">{{skill.skillName}}</span>\n          </div>\n        </div>\n        <div *ngIf=\"jobPost.jobPost.details\">\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Job Description</span>\n          <!--<div *ngIf=\"jobPost.jobPost.details.length > 0\">\n          <div *ngFor=\"let detail of jobPost.jobPost.details\">\n            <span *ngIf=\"detail.detail\" class=\"vertical-center text-ssmd text-grey px-3 py-2  m-2 bg-light\"> <span\n                class=\"material-icons-outlined text-sm text-grey mr-2\">circle</span> &nbsp; {{detail.detail}}</span>\n          </div>\n        </div>-->\n          <div *ngIf=\"jobPost.jobPost.details\">\n            <p class=\"text-sm\" style=\"white-space: pre-wrap;\">{{jobPost.jobPost.details}}</p>\n          </div>\n        </div>\n        <div class=\"pt-2\">\n          <span class=\"text-black semi-bold myfont-size d-block my-3\">Number of Openings</span>\n          <span class=\"text-break text-primary\">{{jobPost.jobPost.vacancy}}</span>\n        </div>\n        <div class=\"pt-2 row justify-content-between vertical-center my-4 mb-3\">\n          <span class=\"text-black semi-bold d-block m-3\">Referral reward:\n            <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">\n              ₹ {{jobPost.referReward}}</div>\n          </span>\n          <span class=\"text-right text-grey text-sm text-break col-auto\" *ngIf=\"role !== 2\">\n            <button class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm\" disabled>Posted on\n              {{jobPost.jobPost.createdAt\n              | date: 'dd MMMM yyyy'}}</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\n\n<ng-template class=\"p-2\" #applyModal>\n  <div class=\"bg-white p-3\" style=\"border-radius: 5px;\">\n    <span class=\"d-block material-icons text-grey text-link text-right\" (click)=\"closeModal()\">close</span>\n    <span class=\"d-block text-grey bold mb-2\">Read before you apply - </span>\n    <span class=\"d-block text-dark\">Make sure that you have entered correct details in your profile.</span>\n    <span class=\"d-block text-dark\">Your profile data and resume will be shared with the\n      {{jobPost.jobPost.companyName}}</span>\n    <div class=\"w-100 d-flex justify-content-center my-4 pt-5\">\n      <button class=\"btn btn-primary bg-violet px-4 py-2\" (click)=\"applyJob()\">Apply now</button>\n    </div>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/jahid/Desktop/bhaskarthedeveloper-/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0dfH":
    /*!********************************************************************!*\
      !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
      \********************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function dfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "uHDt");
      /* harmony import */


      var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found.component.scss */
      "JALx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);

          this.title = 'Sorry!';
          this.message = 'Visit after Sometime';
          this.visibility = true;
          this.isError = false;
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ctorParameters = function () {
        return [];
      };

      NotFoundComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        visibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        isError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotFoundComponent);
      /***/
    },

    /***/
    "109v":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/log-in/log-in.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vh-100\" style=\"overflow-y: auto;overflow-x: auto;\">\n<div class=\"row shadow justify-content-center p-0 m-0\">\n  <div class=\"col-sm-11\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light w-100\">\n      <a class=\"nav-link\"><img src=\"../../../../assets/refer2carrierlogo.png\" class=\"logo-header\" alt=\"\">\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"ml-3 collapse navbar-collapse vertical-center justify-content-between\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mr-4\">\n            <a routerLink=\"/home\" class=\"nav-link text-dark myfont-size text-link active-button\">\n              ABOUT US</a>\n          </li>\n          <li class=\"nav-item mr-4\">\n            <a class=\"nav-link text-dark myfont-size text-link active-button\">\n              JOB OPPORTUNITIES</a>\n          </li>\n          <li class=\"nav-item mr-4\">\n            <a class=\"nav-link text-dark myfont-size text-link active-button\">\n              PARTNERS</a>\n          </li>\n          <li class=\"nav-item mr-4\">\n            <a class=\"nav-link text-dark myfont-size text-link active-button\">\n              CONTACT US</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n          <li class=\"vertical-center\">\n            <a (click)=\"goToSignUp()\" *ngIf=\"isLogin || isForgotPassword || isVerifyOTP\"><button class=\"btn btn-primary mr-2\"><span class=\"vertical-center\">\n              <ion-icon name=\"lock-closed\" class=\"mr-1\"></ion-icon>SIGNUP\n            </span></button></a>\n            <a *ngIf=\"isSignUp\" (click)=\"goToLogin()\"><button class=\"btn btn-primary\"><span\n                  class=\"vertical-center\">\n                  <ion-icon name=\"person\" class=\"mr-1\"></ion-icon>LOGIN\n                </span></button></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n  <div class=\"bg-white vertical-center\" style=\"overflow-y: auto;\">\n    <div class=\"container mt-5\">\n      <div *ngIf=\"isLogin\" class=\"row mt-8 mb-5\">\n        <div class=\"col-md-12 col-lg-6\">\n          <div class=\"p-a30 border-1\">\n            <div class=\"tab-content\">\n              <form id=\"login\" [formGroup]=\"loginForm\">\n                <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">LOGIN</div>\n                <div class=\"p text-secondary\">If you have an account with us, please log in.</div>\n                <alert type=\"success\" class=\"text-sm m-2\" *ngIf=\"isVerified\">\n                  Now you can login with your credentials.\n                </alert>\n                <div class=\"form-group\">\n                  <div class=\"label\">E-MAIL* </div>\n                  <input name=\"email\" required=\"\" class=\"form-control\" placeholder=\"Your Email Id\"\n                    formControlName='emailLogin' type=\"email\">\n\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"label\">PASSWORD* </div>\n                  <input name=\"password\" required=\"\" class=\"form-control \" placeholder=\"Type Password\"\n                    formControlName='passwordLogin' type=\"password\">\n                </div>\n                <div class=\"text-left mb-2 col-sm-12\">\n                  <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\n                </div>\n                <div class=\"mt-3 vertical-center\">\n                  <button class=\"btn btn-primary text-center site-button mr-5 btn-lg\"\n                    (click)=\"login()\">LOGIN</button>\n                  <div class=\"vertical-center text-link \" (click)=\"forgotPasswordVisible()\">\n                    <ion-icon name=\"lock-open-outline\"></ion-icon>\n                    <span class=\"ml-2\">\n                      Forgot\n                      Password</span>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"col-sm-12 p-2\" *ngIf=\"isLoginCard\">\n            <h5 class=\"p w-100 text-grey text-sm text-center\">Or Sign in using</h5>\n            <div class=\"w-100 d-flex justify-content-center\">\n              <ion-icon class=\"linked-in-color text-lg m-2 text-link\" (click)=\"linkedinLogin()\" name=\"logo-linkedin\">\n              </ion-icon>\n              <ion-icon class=\"text-danger text-lg m-2 text-link\" (click)=\"googleLogin()\" name=\"logo-google\">\n              </ion-icon>\n              <ion-icon class=\"facebook-color text-lg m-2 text-link\" (click)=\"facebookLogin()\" name=\"logo-facebook\">\n              </ion-icon>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <img src=\"../../assets/login.png\" alt=\"\">\n        </div>\n      </div>\n      <div *ngIf=\"isForgotPassword || isResetPassword\" class=\"row mt-7 vertical-center\">\n        <div class=\"col-md-12 col-lg-6 vertical-center\">\n          <div class=\"p-a30 border-1\">\n            <form *ngIf=\"isForgotPassword\">\n              <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">FORGET PASSWORD ?</div>\n              <div class=\"p text-secondary\">We will send you an email to reset your password.</div>\n              <div class=\"form-group\">\n                <div class=\"label\">E-MAIL *</div>\n                <input name=\"email\" class=\"form-control\" [formControl]=\"email\" placeholder=\"Your Email Id\" type=\"email\">\n              </div>\n              <div class=\"vertical-center justify-content-between\">\n                <button class=\"btn btn-outline-primary\" (click)=\"goToLogin()\">Back</button>\n                <button class=\"btn btn-primary\" (click)=\"forgotPassword()\">Submit</button>\n              </div>\n            </form>\n            <div class=\"p-3 row justify-content-center\" *ngIf=\"isResetPassword\">\n              <mat-form-field class=\"p-0 w-100 mat-form-field col-sm-7 mb-3\">\n                <mat-label class=\"semi-bold text-grey text-smd m-0\">New Password</mat-label>\n                <input matInput class=\"text-sm m-0\" [type]=\"!isPasswordVisible ? 'password': 'text'\"\n                  placeholder=\"Enter password\" [formControl]='resetPassword'>\n                <!-- <span matSuffix (click)=\"isPasswordVisible = !isPasswordVisible\"\n                class=\"text-link material-icons text-grey\">{{!isPasswordVisible ? 'visibility_off': 'visibility'}}\n              </span> -->\n                <mat-error class=\"text-xs\">Password required*</mat-error>\n              </mat-form-field>\n              <div class=\"w-100 d-flex justify-content-center mb-5\">\n                <button class=\"btn btn-primary p-1 px-4 text-smd bold\"\n                  style=\"border-radius: 20px; border-color: 0px !important;\" (click)=\"restPassword()\">Reset</button>\n              </div>\n              <div class=\"w-100 text-center\" *ngIf=\"isForgotPassword\">\n                <a class=\"text-sm text-link semi-bold text-primary mr-2\" (click)='showLogin()'><u>Login\n                    here.</u></a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n          <img src=\"../../assets/login.png\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"mt-7 row mt-8 mb-5\">\n        <div class=\"row\" *ngIf=\"isSignUp\">\n          <div class=\"col-md-12 col-lg-6\">\n            <div class=\"p-a30 border-1  max-w500 m-auto\">\n              <div class=\"h4\" style=\"font-family: 'Lato', sans-serif;font-weight: 700;\">\n                PERSONAL INFORMATION</div>\n              <div class=\"p text-secondary\">If you don't have an account with us, please\n                Sign up.</div>\n              <form [formGroup]=\"signupForm\">\n                <div class=\"form-group\">\n                  <div class=\"label\">Full Name *</div>\n                  <input name=\"name\" placeholder=\"Full Name\" formControlName='name' required=\"\" class=\"form-control\"\n                    placeholder=\"First Name\" type=\"text\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"label\">E-MAIL *</div>\n                  <input name=\"email\" formControlName='email' required=\"\" class=\"form-control\"\n                    placeholder=\"Your Email Id\" type=\"email\">\n                </div>\n                <div class=\"form-group\">\n                  <div class=\"label\">PASSWORD *</div>\n                  <input name=\"password\" formControlName='password' required=\"\" class=\"form-control \"\n                    placeholder=\"Type Password\" type=\"password\">\n                </div>\n                <div class=\"text-left mb-2 col-sm-12\">\n                  <span class=\"text-sm text-danger\" *ngIf=\"message\"><b>{{message}}</b></span>\n                </div>\n                <div class=\"text-left mt-3 vertical-center\">\n                  <button *ngIf=\"!isServiceRunning\" class=\"btn btn-primary text-center site-button p-3 px-4 btn-lg\"\n                    (click)=\"registerCandidate()\">CREATE</button>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"col-md-12 col-lg-6\">\n            <img src=\"../../assets/register.png\" alt=\"\">\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"isVerifyOTP\">\n          <div class=\"col-md-12 col-lg-6\" *ngIf=\"isVerifyOTP || isSignUp\">\n            <div class=\"p-a30 border-1  max-w500 m-auto\">\n              <div class=\"w-100 p-3 d-flex justify-content-center\">\n                <div class=\"w-100\">\n                  <alert type=\"success\" class=\"text-sm\">\n                    We have sent a 6 digit passcode at {{ signupForm.get('email').value }} {{email.value}} kindly enter\n                    the\n                    code\n                    here.\n                  </alert>\n                  <div class=\"p-3\">\n                    <label class=\"semi-bold mt-2\">Enter a 6-digit passcode</label>\n                    <ng-otp-input name=\"otp\" ngDefaultControl [(ngModel)]='otp' (onInputChange)=\"onOtpChange($event)\"\n                      [config]=\"{length:6, allowNumbersOnly:true, inputClass:'mb-3'\t}\">\n                    </ng-otp-input>\n                    <div class=\"text-right mb-2 d-block\">\n                      <span class=\"text-sm text-danger\" *ngIf=\"!isOTPCorrect\"><b>Invalid code</b></span>\n                    </div>\n                    <button *ngIf=\"!isServiceRunning\" (click)=\"verifyOTP()\"\n                      class=\"btn btn-primary d-block p-1 px-4 text-sm\" style=\"border-radius: 20px;\">Verify</button>\n                    <ion-spinner color=\"primary\" mode=\"md\" *ngIf=\"isServiceRunning\"></ion-spinner>\n                    <div class=\"mt-5\">\n                      <a class=\"text-primary d-block semi-bold text-sm mt-3 pb-2\" *ngIf='timer > 0'><span\n                          class=\"text-secondary\">Resend Code </span> 00 :\n                        {{timer > 9 ? timer : '0'+timer}}</a>\n                      <a class=\"text-primary semi-bold d-block text-link text-sm mt-3 pb-2\" *ngIf='timer <= 0'\n                        (click)=\"resendOTP()\">Resend Code</a>\n                    </div>\n                  </div>\n                  <div class=\"w-100\">\n                    <div class=\"a text-sm text-link vertical-center\" (click)='back()'>\n                      Back</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 col-lg-6\">\n            <img src=\"../../assets/register.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "3WbM":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastService */

    /***/
    function WbM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(snackBar) {
          _classCallCheck(this, ToastService);

          this.snackBar = snackBar;
        }

        _createClass(ToastService, [{
          key: "showToast",
          value: function showToast(message) {
            var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bg-violet';
            this.snackBar.open(message, 'close', {
              duration: 2500,
              verticalPosition: 'bottom',
              horizontalPosition: 'center',
              panelClass: [color, 'text-white', 'overlay', 'fixed-bottom', 'mx-auto', 'w-100', 'success-dialog']
            });
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
      /***/
    },

    /***/
    "5Dfi":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dfi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXAtcmVjZW50LWpvYi1wb3N0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "5sq2":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/applications/applications.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function sq2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n.active-menu {\n  color: white;\n  border-bottom: 2px solid #0E2043;\n  background-color: #0E2043;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUF5RCw2QkFBNkI7QUFDdEY7O0FBQUE7RUFBMEMsV0FBVztFQUFFLGVBQWU7QUFLdEU7O0FBSEE7RUFDSSx5Q0FBd0M7QUFNNUM7O0FBSEU7RUFDRSx3QkFBd0I7QUFNNUI7O0FBSEU7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQU03QiIsImZpbGUiOiJhcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuOWVtIDBweCAhaW1wb3J0YW50O31cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG59XG5cbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hY3RpdmUtbWVudXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwRTIwNDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMjA0MztcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "8ymR":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/add-job-post/add-job-post.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AddJobPostComponent */

    /***/
    function ymR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddJobPostComponent", function () {
        return AddJobPostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_job_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-job-post.component.html */
      "BQ1G");
      /* harmony import */


      var _add_job_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-job-post.component.scss */
      "a9Oz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/toast.service */
      "3WbM");
      /* harmony import */


      var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AddJobPostComponent = /*#__PURE__*/function () {
        function AddJobPostComponent(jobPostService, toastService, modalRef, modalService, router) {
          _classCallCheck(this, AddJobPostComponent);

          this.jobPostService = jobPostService;
          this.toastService = toastService;
          this.modalRef = modalRef;
          this.modalService = modalService;
          this.router = router;
          this.jobPost = undefined;
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/recruiter/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/recruiter/profile'
          }, {
            name: 'JOB POSTS',
            route: '/recruiter/job-posts'
          }, {
            name: 'MANAGE APPLICANTS',
            route: '/recruiter/applicants'
          }, {
            name: 'ADD JOB POST',
            route: '/recruiter/create-job-posts'
          }];
          this.aboutUs = '';
          this.description = '';
          this.companyName = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.organizationName;
          this.companyLogo = JSON.parse(window.atob(window.localStorage.getItem('id'))).organizationDetails.logo;
          this.isServiceRunning = false;
          this.message = '';
          this.jobDetailsArray = [];
          this.questionsArray = [];
          this.newAttribute = {};
          this.firstField = true;
          this.firstFieldName = 'First Item name';
          this.skillsOptions = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS', 'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
          this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.skillsArray = [];
        }

        _createClass(AddJobPostComponent, [{
          key: "formatLabel",
          value: function formatLabel(value) {
            if (value === 10) {
              return '10+';
            }

            return "".concat(value, "-").concat(value + 1);
          }
        }, {
          key: "addQuestion",
          value: function addQuestion() {
            this.questionsArray.push({
              question: ''
            });
          }
        }, {
          key: "deleteQuestion",
          value: function deleteQuestion(index) {
            this.questionsArray.splice(index, 1);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.filteredSkills = this.skillName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
              return _this._filterSkills(value);
            }));
            this.jobDetailsArray.push({
              detail: ''
            });
            this.jobPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              vacancy: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]),
              salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(1)]),
              location: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
              lastDateToApply: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              jobType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              jobInternship: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              salaryType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              partTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](false),
              experience: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](6)
            });

            if (this.jobPostService.post) {
              this.jobPost = this.jobPostService.post;
              this.jobPostForm.patchValue({
                title: this.jobPost.jobPost.title,
                vacancy: this.jobPost.jobPost.vacancy,
                salary: this.jobPost.jobPost.salary,
                location: this.jobPost.jobPost.location,
                jobType: this.jobPost.jobPost.jobType,
                jobInternship: this.jobPost.jobPost.jobInternship,
                salaryType: this.jobPost.jobPost.salaryType,
                partTime: this.jobPost.jobPost.partTime,
                lastDateToApply: new Date(this.jobPost.jobPost.lastDateToApply),
                experience: this.jobPost.jobPost.experience
              });
              this.skillsArray = this.jobPost.jobPost.skills;
              this.description = this.jobPost.jobPost.details, this.jobDetailsArray = this.jobPost.jobPost.details;
              this.aboutUs = this.jobPost.jobPost.aboutUs;
              this.questionsArray = this.jobPost.jobPost.question;
            }

            this.jobPostService.post = undefined;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.isServiceRunning = false;
            this.modalService.hide(2);
          }
        }, {
          key: "openSkillModal",
          value: function openSkillModal(template) {
            this.skillName.patchValue('');
            this.modalRef = this.modalService.show(template, {
              id: 2,
              ignoreBackdropClick: true,
              animated: true
            });
            this.isServiceRunning = true;
          }
        }, {
          key: "_filterSkills",
          value: function _filterSkills(value) {
            if (value !== null) {
              var filterValue = value.toLowerCase();
              return this.skillsOptions.filter(function (option) {
                return option.toLowerCase().indexOf(filterValue) === 0;
              });
            }
          }
        }, {
          key: "addFieldValueToSkillArray",
          value: function addFieldValueToSkillArray() {
            var _this2 = this;

            this.skillName.markAsTouched();

            if (this.skillName.value) {
              if (!this.skillsArray.find(function (data) {
                return data.skillName === _this2.skillName.value;
              })) {
                this.skillsArray.push({
                  skillName: this.skillName.value
                });
              }

              this.closeModal();
              this.skillName.reset();
            }
          }
        }, {
          key: "deleteFieldValueToSkillArray",
          value: function deleteFieldValueToSkillArray(index) {
            if (this.skillsArray.length > 1) {
              this.skillsArray.splice(index, 1);
            }
          }
        }, {
          key: "addFieldValueToJobDetailsArray",
          value: function addFieldValueToJobDetailsArray() {
            this.jobDetailsArray.push({
              detail: ''
            });
          }
        }, {
          key: "deleteFieldValueJobDetailsArray",
          value: function deleteFieldValueJobDetailsArray(index) {
            if (this.jobDetailsArray.length > 1) {
              this.jobDetailsArray.splice(index, 1);
            }
          }
        }, {
          key: "onEditCloseItems",
          value: function onEditCloseItems() {
            this.isEditItems = !this.isEditItems;
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            this.message = '';
            this.jobPostForm.markAllAsTouched();

            if (this.questionsArray.length > 0) {
              this.questionsArray.forEach(function (question, index) {
                if (question.question === '') {
                  _this3.toastService.showToast('Please enter question');

                  return;
                }

                if (index === _this3.questionsArray.length - 1) {
                  _this3.addPost();
                }
              });
            } else {
              this.addPost();
            }
          }
        }, {
          key: "addPost",
          value: function addPost() {
            if (this.skillsArray.length > 0) {
              if (this.description) {
                if (this.jobPostForm.valid) {
                  if (this.jobPostForm.get('jobType').value === 'In office') {
                    if (this.jobPostForm.get('location').value) {
                      this.uploadPost();
                    } else {
                      this.toastService.showToast('Enter Location', 'bg-danger');
                    }
                  } else {
                    this.uploadPost();
                  }
                } else {
                  this.toastService.showToast('Please fill all mandatory fields!', 'bg-danger');
                }
              } else {
                this.toastService.showToast('Enter Job Details!', 'bg-danger');
              }
            } else {
              this.toastService.showToast('Please add skill(s)!', 'bg-danger');
            }
          }
        }, {
          key: "uploadPost",
          value: function uploadPost() {
            var _this4 = this;

            this.isServiceRunning = true;
            var post = {
              jobPost: {
                active: true,
                companyName: this.companyName,
                companyLogo: this.companyLogo,
                createdBy: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
                createdAt: new Date(),
                title: this.jobPostForm.get('title').value,
                vacancy: this.jobPostForm.get('vacancy').value,
                salary: this.jobPostForm.get('salary').value,
                location: this.jobPostForm.get('location').value,
                jobType: this.jobPostForm.get('jobType').value,
                jobInternship: this.jobPostForm.get('jobInternship').value,
                salaryType: this.jobPostForm.get('salaryType').value,
                partTime: this.jobPostForm.get('partTime').value,
                lastDateToApply: this.jobPostForm.get('lastDateToApply').value,
                experience: this.jobPostForm.get('experience').value,
                skills: this.skillsArray,
                question: this.questionsArray,
                details: this.description,
                aboutUs: this.aboutUs,
                verified: this.jobPost ? this.jobPost.status === 'approved' : false
              }
            };

            if (!this.jobPost) {
              this.jobPostService.addJobPost(post).subscribe(function (data) {
                if (data.data === true) {
                  _this4.toastService.showToast('Job Post Added Successfully !');
                }

                _this4.isServiceRunning = false;

                _this4.jobPostForm.reset();

                _this4.skillsArray = [];
                _this4.questionsArray = [];
                _this4.description = '';
                _this4.aboutUs = '';

                _this4.modalRef.hide();

                _this4.jobPostService.getPosts();
              });
            } else {
              post._id = this.jobPost._id;
              this.jobPostService.updateJobPost(post).subscribe(function (data) {
                if (data.data === true) {
                  _this4.toastService.showToast('Job Post Updated Successfully !');
                }

                _this4.jobPostService.post = undefined;
                _this4.isServiceRunning = false;

                _this4.modalService.hide();

                window.history.back();

                _this4.jobPostService.getPosts();
              });
            }
          }
        }, {
          key: "deletePost",
          value: function deletePost() {
            var _this5 = this;

            this.isServiceRunning = true;
            this.jobPostService.deleteJobPost({
              _id: this.jobPost._id
            }).subscribe(function (data) {
              if (data.data === true) {
                _this5.toastService.showToast('Job post deleted successully!');
              }

              _this5.jobPostService.post = undefined;
              _this5.isServiceRunning = false;

              _this5.modalService.hide();

              window.history.back();
            }, function (err) {
              return _this5.isServiceRunning = false;
            });
          }
        }, {
          key: "delete",
          value: function _delete(template) {
            this.modalRef = this.modalService.show(template, {
              id: 2,
              "class": 'delete-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "close",
          value: function close() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            if (id === 2) {
              this.modalService.hide(2);
            } else {
              this.modalService.hide();
            }
          }
        }]);

        return AddJobPostComponent;
      }();

      AddJobPostComponent.ctorParameters = function () {
        return [{
          type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__["JobPostServiceService"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AddJobPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-add-job-post',
        template: _raw_loader_add_job_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_job_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddJobPostComponent);
      /***/
    },

    /***/
    "9uHk":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/recent-jobs/recent-jobs.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function uHk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNlbnQtam9icy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "A/e3":
    /*!***************************************************************************************!*\
      !*** ./src/app/shared/components/add-job-post/job-details/job-details.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function AE3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "AYYD":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function AYYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".footer-demo {\n  height: 100%;\n  /* Angular material adds \"height:100%\" to body tag by default. So, ignore this step in real-time application */\n}\n\n.demo-section {\n  border: 1px solid #bbb;\n}\n\nfooter {\n  background-color: #ddd;\n  border-top: 1px solid #bbb;\n  text-align: center;\n}\n\n#clickFooter footer:hover {\n  background-color: #ccc;\n  cursor: pointer;\n}\n\n#btmFooter {\n  align-self: flex-end;\n}\n\n#clickFooter {\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFBRSw4R0FBQTtBQUVsQjs7QUFDRTtFQUNFLHNCQUFzQjtBQUUxQjs7QUFDRTtFQUNFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBRXRCOztBQUNFO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFFbkI7O0FBQ0U7RUFDRSxvQkFBb0I7QUFFeEI7O0FBQ0U7RUFDRSxrQkFBa0I7QUFFdEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1kZW1vIHtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEFuZ3VsYXIgbWF0ZXJpYWwgYWRkcyBcImhlaWdodDoxMDAlXCIgdG8gYm9keSB0YWcgYnkgZGVmYXVsdC4gU28sIGlnbm9yZSB0aGlzIHN0ZXAgaW4gcmVhbC10aW1lIGFwcGxpY2F0aW9uICovXG4gIH1cbiAgXG4gIC5kZW1vLXNlY3Rpb24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gIH1cbiAgXG4gIGZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2JiYjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICNjbGlja0Zvb3RlciBmb290ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAjYnRtRm9vdGVyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICBcbiAgI2NsaWNrRm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "AkDi":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AkDi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row p-0 m-0 pt-5 overflow-x-hidden\">\n  <div class=\"row col-sm-12 justify-content-center p-0 mx-1\">\n    <div class=\"row col-sm-12 d-flex justify-content-between mx-1 mb-4\">\n      <div class=\"mx-2\">\n        <h2>Recent Job Posts</h2>\n      </div>\n      <div class=\"px-2 d-flex justify-content-center vertical-center text-link \">\n        <div class=\"px-2 align-self-end py-1 text-lato btn btn-primary text-xs\" (click)=\"navigateToAllJobs()\">Browse All Jobs</div>\n      </div>\n    </div>\n    <div class=\"col-sm-9 p-0 mt-2 \">\n      <app-not-found *ngIf=\"allJobPost.length === 0\" style=\"margin-top: 200px !important;\" message=\"No Jobs Available\" class=\"center-parent\">\n      </app-not-found>\n      <div class=\" mb-3\" *ngFor=\"let jobPost of allJobPost; index as i;\" (click)=\"seeDetails(jobPost)\">\n        <div *ngIf=\"i<5\" class=\"card shadow-lg p-3 text-link border-8\">\n          <div class=\"d-flex mb-3 justify-content-between\">\n            <div class=\"d-flex flex-wrap\">\n              <div class=\"mr-3 mb-2\">\n                <span>\n                  <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\n                    style=\"height: 60px; width: 58.2px;\">\n                </span>\n              </div>\n              <div class=\"text-left\">\n                <h4>{{jobPost.jobPost.title}}</h4>\n                <div class=\"column\">\n                  <div class=\"d-flex vertical-center flex-wrap\">\n                    <div class=\" vertical-center justify-content-start mr-3\">\n                      <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\n                      <span class=\" text-lato text-primary d-inline\">Experience : </span>\n                      <span class=\"text-lato text-primary\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\n                        ''\n                        }}\n                        years</span>\n                    </div>\n\n                    <div class=\" vertical-center justify-content-start mr-3\">\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\n                      <span class=\" text-lato text-primary\">&nbsp; {{jobPost.jobPost.companyName}}</span>\n                    </div>\n                  </div>\n                  <div class=\"d-flex flex-wrap mt-1\">\n                    <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\n                      class=\" vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\n                      <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\n                    </div>\n\n                    <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\n                      class=\" vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\n                      <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\n                    </div>\n\n                    <div class=\"vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons text-md  mr-2 text-primary\">\n                        schedule\n                      </span>\n                      <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\n                        date: 'dd\n                        MMMM\n                        yyyy'}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\n              <div class=\"p-2 bg-light \" style=\"border-radius: 25px !important;\">Applied</div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\n            <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\n\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\n                {{jobPost.jobPost.skills[0].skillName }}\n              </div>\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\n                *ngIf=\"jobPost.jobPost.skills.length > 1\">\n                {{jobPost.jobPost.skills[1].skillName }}\n              </div>\n            </div>\n\n            <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\n              <div class=\"my-2 vertical-center justify-content-start\">\n                <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\n                <div class=\"d-flex ml-1 align-self-end\" >\n                <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\n              </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3 mt-2 px-2\">\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-5 shadow-lg \">\n        <div class=\"m-2 mb-3\">\n          <div class=\"avatar-div\">\n            <img class=\"avatar-image\" src=\"../../../../assets/Peter Schutz2.jpg\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"d-flex text-dark\">\n          <p>Hire character, Train Skill\n          </p>\n        </div>\n        <div class=\"d-flex flex-column \">\n          <span class=\"text-sm text-primary\">Peter Schutz</span>\n          <span class=\"text-grey text-sm\">Former CEO, Porsche</span>\n        </div>\n      </div>\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-2 shadow-lg \"\n        style=\"background-color: #000930; opacity: 0.8;\">\n        <div class=\"d-flex text-dark\">\n          <h4 class=\"text-white\">Make a Difference with Your Profile! </h4>\n        </div>\n        <div class=\"d-flex text-white\">\n          <p>Get more Applications on AI based Recruitment System with Your Updated Profile!\n          </p>\n        </div>\n        <div class=\"d-flex\">\n          <div (click)=\"navigateToMyProfile()\"\n            class=\"d-flex vertical-center px-2 py-1 border-6 text-link btn btn-primary text-white text-lato text-smd\">\n            Update Profile\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, firebaseConfig */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
        return firebaseConfig;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      var firebaseConfig = {
        apiKey: 'AIzaSyD8oHgN3nK3qcT7kvcMVTs9mkzeqFJ9vSY',
        authDomain: 'refer2career-9342a.firebaseapp.com',
        projectId: 'refer2career-9342a',
        storageBucket: 'refer2career-9342a.appspot.com',
        messagingSenderId: '833213007308',
        appId: '1:833213007308:web:e09ff54d82c39b3c188969',
        measurementId: 'G-LJET8FMWKP'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BQ1G":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/add-job-post/add-job-post.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BQ1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\" *ngIf=\"!jobPost\"></app-nav-bar-content>\n<div class=\"w-100 h-100 m-0 p-0 bg-lightest-blue\" style=\"overflow-y: auto;\">\n  <div class=\"w-100 bg-primary no-border-t\" style=\"min-height: 240px !important; border-radius: 30px;\">\n  </div>\n  <div class=\"row justify-content-center px-0 pt-2 mx-0\" style=\"margin-top: -220px;\">\n    <div class=\"col-sm-12\">\n      <span class=\"material-icons d-block text-right text-lg text-link text-white semi-bold\"\n        (click)=\"close()\" *ngIf=\"jobPost\">close</span>\n      <span class=\"material-icons d-block text-right text-lg mt-3 text-link text-white semi-bold\" *ngIf=\"jobPost\"\n        (click)=\"delete(deletePopup)\">delete</span>\n    </div>\n    <div class=\"col-sm-8\">\n      <span class=\"d-block text-white text-center semi-bold bold text-lg my-3\" *ngIf=\"!jobPost\">Post a job</span>\n      <span class=\"d-block text-white text-center semi-bold bold text-lg my-3\" *ngIf=\"jobPost\">Edit job</span>\n    </div>\n    <div class=\"col-sm-8 mx-2 bg-white\"\n      style=\"border-radius: 7px; overflow-y: auto !important; overflow-x: hidden !important;\">\n      <div class=\"mt-4 row d-flex vertical-center justify-content-center\" [formGroup]=\"jobPostForm\">\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"title\" class=\"label-form\">Job Title/Designation<span class=\"text-primary\">*</span></label>\n          <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\n            <input matInput placeholder=\"ex Software Developer\" formControlName='title'>\n            <mat-error>Enter valid title</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"vacancy\" class=\"label-form\">Total Vacancies <span class=\"text-primary\">*</span></label>\n           <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\n            <input matInput type=\"number\" placeholder=\"ex 10\" class=\"p-0\" id=\"vacancy\" formControlName='vacancy'>\n            <mat-error>Enter valid number</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n            <label for=\"type\" class=\"label-form\">Full time Permanent/Part Time/Contractual Job/Internship</label>\n           <mat-form-field class=\"p-0 w-100 mat-form-field\" appearance=\"fill\">\n            <mat-select id=\"type\" formControlName='jobInternship'>\n              <mat-option value=\"Full Time Permanent Job\">Full Time Permanent Job</mat-option>\n              <mat-option value=\"Part Time\">Part Time</mat-option>\n              <mat-option value=\"Contractual Job\">Contractual Job</mat-option>\n              <mat-option value=\"Internship\">Internship</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"jobType\" class=\"label-form\">Job Type <span class=\"text-primary\">*</span></label>\n         <mat-form-field appearance=\"fill\"  class=\"p-0 w-100 mat-form-field\">\n          <mat-select id=\"jobType\" formControlName='jobType'>\n            <mat-option value=\"In office\">In office</mat-option>\n            <mat-option value=\"Work from home\">Work from home</mat-option>\n          </mat-select>\n        </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"salary\" class=\"label-form\">{{ jobPostForm.get('jobInternship').value === \"Internship\" ? 'Stipend': 'Salary'}} <span\n            class=\"text-primary\">*</span></label>\n          <mat-form-field class=\"w-100 mat-form-field\" appearance=\"fill\">\n            <input matInput formControlName='salary' id=\"salary\" name=\"salary\" type=\"number\" class=\"p-0\">\n            <span matPrefix>&#8377;&nbsp;</span>\n            <span matSuffix>.00</span>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"salaryType\" class=\"label-form\">Salary type <span class=\"text-primary\">*</span></label>\n         <mat-form-field  class=\"p-0 w-100 mat-form-field\" appearance=\"fill\">\n          <mat-select id=\"salaryType\" formControlName='salaryType'>\n            <mat-option value=\"per week\">per week</mat-option>\n            <mat-option value=\"per month\">per month</mat-option>\n            <mat-option value=\"per annum\">per annum</mat-option>\n          </mat-select>\n        </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-\" *ngIf=\"jobPostForm.get('jobType').value === 'In office'\">\n          <label for=\"jobLocation\" class=\"label-form\">Job Location <span class=\"text-primary\">*</span></label>\n           <mat-form-field appearance=\"fill\" class=\"p-0 w-100 mat-form-field\">\n            <input matInput placeholder=\"ex Bengaluru\"  id=\"jobLocation\"  class=\"p-0\" formControlName='location'>\n            <mat-error>Enter valid location</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-5 m-3\">\n          <label for=\"workExp\" class=\"label-form\">Work Experience (Minimum) <span class=\"text-primary\">*</span></label>\n          <mat-slider class=\"w-100 form-control\" id=\"workExp\" style=\"color: #0e2043;\" formControlName=\"experience\" thumbLabel tickInterval=\"1\" min=\"0\" max=\"10\">\n          </mat-slider>\n        </div>\n        <div class=\"col-sm-5 m-3\"></div>\n        <div class=\"p-4 bg-white mb-3 col-sm-11\">\n          <div class=\"mt-2 w-100\">\n            <div class=\"ml-4 mb-3 d-flex justify-content-between\">\n              <span class=\"text-grey semi-bold\">Skills </span>\n              <span class=\"text-primary text-link semi-bold d-block\" (click)=\"openSkillModal(skillModal)\">+Add Skill</span>\n            </div>\n            <div class=\"row col-sm-11 d-flex justify-content-start\">\n              <div class=\"col-sm-12 my-4\">\n                <div class=\"bg-lightest-blue\" *ngFor=\"let data of skillsArray; index as i\"\n                  class=\"p-1 px-2 bg-lightest-blue vertical-center\"\n                  style=\"display: inline-block; border-radius: 8px; width: max-content; margin: 7px !important; white-space:nowrap;\">\n                  <span class=\"text-primary mr-2\">{{data.skillName}}</span>\n                  <span class=\"material-icons text-xs text-link text-primary\" (click)=\"deleteFieldValueToSkillArray(i)\">close</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\n            <label class=\"text-grey semi-bold d-block text-center mb-3\">Job Description</label>\n            <textarea class=\"form-control\" placeholder=\"Enter job description\" [(ngModel)]=\"description\"\n              [ngModelOptions]=\"{standalone: true}\" rows=\"8\"></textarea>\n          </div>\n        </div>\n        <div class=\"col-sm-5 my-3\">\n          <label class=\"text-grey semi-bold d-block mb-3\" >Last date to apply</label>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <span class=\"material-icons input-group-text text-secondary bg-white\">date_range\n              </span>\n            </div>\n            <input type=\"text\" formControlName=\"lastDateToApply\" autocomplete=\"nope\" placeholder=\"Choose Date\"\n              class=\"form-control semi-bold text-grey\" style=\"border-width: 1px;\" bsDatepicker readonly\n              [bsConfig]=\"{  isAnimated: true, containerClass:'theme-dark-blue', dateInputFormat: 'DD MMMM YYYY'}\">\n          </div>\n        </div>\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\n            <label class=\"text-grey semi-bold\">About us</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"aboutUs\" [ngModelOptions]=\"{standalone: true}\"\n              id=\"exampleFormControlTextarea1\" rows=\"5\"></textarea>\n          </div>\n        </div>\n        <div class=\"col-sm-11 d-flex justify-content-center p-0 m-0\">\n          <div class=\"col-sm-11 p-0 my-3 mx-4\">\n            <div class=\"d-flex justify-content-between vertical-center my-3\">\n              <label class=\"text-grey semi-bold\">Custom Questions</label>\n              <span class=\"text-primary text-link semi-bold d-block\" (click)=\"addQuestion()\">+Add Question</span>\n            </div>\n            <div class=\"mb-4\" *ngFor=\"let question of questionsArray; index as i\">\n              <div class=\"d-flex justify-content-between vertical-center my-3\">\n                <label class=\"d-block text-grey\">Question {{i + 1}}</label>\n                <span class=\"material-icons-outlined text-grey text-link\" (click)=\"deleteQuestion(i)\">delete</span>\n              </div>\n              <textarea class=\"form-control my-2\" [(ngModel)]=\"question.question\" [ngModelOptions]=\"{standalone: true}\"\n                rows=\"3\"></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-100 d-flex justify-content-center mb-4 mt-5 mr-2\">\n          <span class=\"text-danger text-sm semi-bold\">{{message}}</span>\n          <ion-spinner color=\"primary\" *ngIf=\"isServiceRunning\"></ion-spinner>\n          <button type=\"submit\" *ngIf=\"!isServiceRunning && !jobPost\"\n            class=\"ml-2 btn btn-primary p-0 text-smd px-4 py-1 mr-2\" (click)=\"save()\">Publish</button>\n            <button type=\"submit\" *ngIf=\"!isServiceRunning && jobPost\"\n            class=\"ml-2 btn btn-primary p-0 text-smd px-4 py-1 mr-2\" (click)=\"save()\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\n\n\n<ng-template #deletePopup>\n  <div class=\"modal-body p-3 box-shadow text-smd text-center\" style=\"border-radius: 8px;\">\n    Delete Job Post ?\n    <br>\n    <br>\n    <br>\n    <div class=\"d-flex justify-content-between mt-3\">\n      <button type=\"button\" class=\"btn btn-secondary bg-grey px-3 py-1\" (click)=\"deletePost()\">Yes</button>\n      <button type=\"button\" class=\"btn btn-prmary bg-violet px-3 py-1\" (click)=\"close(2)\">No</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #skillModal>\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px;\">\n    <div class=\"d-block text-right\">\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\n    </div>\n    <span class=\"text-grey semi-bold d-block text-center my-2\">ADD SKILL</span>\n    <div class=\"row p-0 px-2 m-3\">\n      <div class=\"col-sm-12 mt-3\">\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\n          <mat-label class=\"text-grey\">Skill Name</mat-label>\n          <input type=\"text\" placeholder=\"Ex. JAVA\" aria-label=\"Number\" matInput [formControl]=\"skillName\"\n            [matAutocomplete]=\"auto\">\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\n              {{option}}\n            </mat-option>\n          </mat-autocomplete>\n          <mat-error>Enter valid detail</mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\n      <button class=\"btn btn-primary py-1 px-2\" (click)=\"addFieldValueToSkillArray()\">ADD SKILL</button>\n    </div>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    "D5Ig":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/manage-applicants/manage-applicants.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function D5Ig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\n  <div class=\"row justify-content-center px-1\" *ngIf=\"!isServiceRunning\">\n    <div class=\"m-3 mt-5 p-2 bg-white col-sm-9\"\n      style=\"margin-top: 30px !important; border-radius: 7px; overflow-y: auto !important; border: 1px solid #cccccc;\">\n      <table class=\"table\" *ngIf=\"allPosts.length > 0\">\n        <thead class=\"thead-light\">\n          <tr class=\"text-center\">\n            <th scope=\"col\">#</th>\n            <th scope=\"col text-center\">PROFILE</th>\n            <th scope=\"col text-center\">STATUS</th>\n            <th scope=\"col text-center\">ACTION</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-center\">\n          <tr *ngFor=\"let post of allPosts; index as i\">\n            <td>{{i+1}}</td>\n            <td class=\"\">{{post.jobPost.title}}</td>\n            <td class=\"pt-3\"><span class=\"p-2 my-auto px-2 text-success\"\n                style=\"background-color: #e2ffd1; border-radius: 10px;\">Active</span></td>\n            <td class=\"\"><span (click)=\"navigate(post._id)\" class=\"p-1 px-5 btn btn-primary \"\n                style=\"border-radius: 10px;\">View\n                Applications</span></td>\n          </tr>\n        </tbody>\n      </table>\n      <div>\n        <h5 class=\"text-grey text-center mb-3\" *ngIf=\"allPosts.length == 0\">Job post not found!</h5>\n        <app-not-found *ngIf=\"allPosts.length == 0\" message=\"No Application Available\"></app-not-found>\n      </div>\n    </div>\n  </div>\n</div>\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "E61o":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/manage-applicants/manage-applicants.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function E61o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtYXBwbGljYW50cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "F8kL":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner-component/spinner-component.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function F8kL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-top fixed-bottom wh-100 vh-100 fixed-top vertical-center justify-content-center\"\n  *ngIf=\"visibility\" style=\"background-color: rgba(49, 49, 49, 0.5) !important;\">\n  <div class=\"border border-light bg-white rounded-circle p-2\">\n    <mat-spinner [diameter]=\"35\" [color]=\"color\"></mat-spinner>\n  </div>\n</div>";
      /***/
    },

    /***/
    "FITq":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/recent-jobs/recent-jobs.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FITq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row p-0 m-0 pt-5 overflow-x-hidden\">\n  <div class=\"row col-sm-12 justify-content-center p-0 mx-1\">\n    <div class=\"row col-sm-12 d-flex justify-content-between mx-1 mb-4\">\n      <div class=\"mx-2\">\n        <h2>Recent Jobs</h2>\n      </div>\n      <div class=\"px-2 d-flex justify-content-center vertical-center text-link \">\n        <div class=\"px-2 align-self-end py-1 text-lato btn btn-primary text-xs\" (click)=\"navigateToAllJobs()\">Browse All Jobs</div>\n      </div>\n    </div>\n    <div class=\"col-sm-9 p-0 mt-2 \">\n      <app-not-found *ngIf=\"filteredJobPosts.length === 0\" style=\"margin-top: 200px !important;\" class=\"center-parent\">\n      </app-not-found>\n      <div class=\" mb-3\" *ngFor=\"let jobPost of filteredJobPosts; index as i;\" (click)=\"seeDetails(jobPost)\">\n        <div *ngIf=\"i<5\" class=\"card shadow-lg p-3 text-link border-8\">\n          <div class=\"d-flex mb-3 justify-content-between\">\n            <div class=\"d-flex flex-wrap\">\n              <div class=\"mr-3 mb-2\">\n                <span>\n                  <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\n                    style=\"height: 60px; width: 58.2px;\">\n                </span>\n              </div>\n              <div class=\"text-left\">\n                <h4>{{jobPost.jobPost.title}}</h4>\n                <div class=\"column\">\n                  <div class=\"d-flex vertical-center flex-wrap\">\n                    <div class=\" vertical-center justify-content-start mr-3\">\n                      <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\n                      <span class=\" text-lato text-primary d-inline\">Experience : </span>\n                      <span class=\"text-lato text-primary\">&nbsp; {{ jobPost.jobPost ? jobPost.jobPost.experience :\n                        ''\n                        }}\n                        years</span>\n                    </div>\n\n                    <div class=\" vertical-center justify-content-start mr-3\">\n                      <span class=\"material-icons  mr-2 text-primary\">business</span>\n                      <span class=\" text-lato text-primary d-inline\">Company : </span>\n                      <span class=\" text-lato text-primary\">&nbsp; {{jobPost.jobPost.companyName}}</span>\n                    </div>\n                  </div>\n                  <div class=\"d-flex flex-wrap mt-1\">\n                    <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\n                      class=\" vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\n                      <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\n                    </div>\n\n                    <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\n                      class=\" vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\n                      <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\n                    </div>\n\n                    <div class=\"vertical-center justify-content-start mr-2\">\n                      <span class=\"material-icons text-md  mr-2 text-primary\">\n                        schedule\n                      </span>\n                      <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\n                        date: 'dd\n                        MMMM\n                        yyyy'}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\n              <div class=\"p-2 bg-light \" style=\"border-radius: 25px !important;\">Applied</div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\n            <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\n\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\n                {{jobPost.jobPost.skills[0].skillName }}\n              </div>\n              <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\n                *ngIf=\"jobPost.jobPost.skills.length > 1\">\n                {{jobPost.jobPost.skills[1].skillName }}\n              </div>\n            </div>\n\n            <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\n              <div class=\"justify-content-between vertical-center mr-2\">\n                <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">REWARD :\n                  ₹{{jobPost.referReward}}</div>\n              </div>\n              <div class=\"my-2 vertical-center justify-content-start\">\n                <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\n                <div class=\"d-flex ml-1 align-self-end\" >\n                <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\n              </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-3 mt-2 px-2\">\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-5 shadow-lg \">\n        <div class=\"m-2 mb-3\">\n          <div class=\"avatar-div\">\n            <img class=\"avatar-image\" src=\"../../../../assets/Group 2.png\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"d-flex text-dark\">\n          <p>I just got a job that I applied for via Refer2Career! I used the site all the time during my job hunt.\n          </p>\n        </div>\n        <div class=\"d-flex flex-column \">\n          <span class=\"text-sm text-primary\">Richard Anderson</span>\n          <span class=\"text-grey text-sm\">California, USA</span>\n        </div>\n      </div>\n      <div class=\"card border-8 d-flex flex-column justify-content-between p-3 mb-2 shadow-lg \"\n        style=\"background-color: #000930; opacity: 0.8;\">\n        <div class=\"d-flex text-dark\">\n          <h4 class=\"text-white\">Make a Difference with Your Online Resume! </h4>\n        </div>\n        <div class=\"d-flex text-white\">\n          <p>Your resume in minutes with JobBoard resume assistant is ready!\n          </p>\n        </div>\n        <div class=\"d-flex\">\n          <div (click)=\"navigateToMyProfile()\"\n            class=\"d-flex vertical-center px-2 py-1 border-6 text-link btn btn-primary text-white text-lato text-smd\">\n            Update Profile\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "Fg4b":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/all-job-posts/all-job-posts.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AllJobPostsComponent */

    /***/
    function Fg4b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllJobPostsComponent", function () {
        return AllJobPostsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_all_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./all-job-posts.component.html */
      "t1wX");
      /* harmony import */


      var _all_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./all-job-posts.component.scss */
      "eqfQ");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AllJobPostsComponent = /*#__PURE__*/function () {
        function AllJobPostsComponent(jobPostService, router, authService) {
          _classCallCheck(this, AllJobPostsComponent);

          this.jobPostService = jobPostService;
          this.router = router;
          this.authService = authService;
          this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
          this.allJobPost = [];
          this.filteredJobPosts = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
          this.options = ['Delivery boy', 'Software engineer', 'UI designer'];
          this.isSortByExpanded = false;
          this.isLocationExpanded = false;
          this.isPartTimeExpanded = false;
          this.isJobCategoryExpanded = false;
          this.isRemoteExpanded = false;
          this.isExperienceExpanded = false;
          this.allLocations = new Set();
          this.selectedLocations = new Set();
          this.selectedLocationsArray = [];
          this.isRelevent = false;
          this.isServiceRunning = false;
          this.isSortBy = false;
          this.isScreenBig = false;
          this.refineInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refineDefaultInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refine = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refineJobsDropDown = false;
          this.allMyApplications = [];
          this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
        }

        _createClass(AllJobPostsComponent, [{
          key: "isChanged",
          value: function isChanged() {
            return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
          }
        }, {
          key: "isFilterAdded",
          value: function isFilterAdded() {
            return !(JSON.stringify(this.refine) === JSON.stringify(this.refineDefaultInitial));
          }
        }, {
          key: "closeSortBy",
          value: function closeSortBy(value) {
            this.isSortBy = value;
            this.isSortByExpanded = false;
          }
        }, {
          key: "openRefineJobs",
          value: function openRefineJobs() {
            if (!this.isScreenBig) {
              this.refineJobsDropDown = !this.refineJobsDropDown;
            }
          }
        }, {
          key: "getMyApplication",
          value: function getMyApplication() {
            var _this6 = this;

            var db = {
              collection: 'applyJob',
              query: {
                candidateId: this.user._id
              },
              selectedFields: {
                jobPostId: 1,
                _id: 0
              }
            };
            this.authService.find(db).subscribe(function (data) {
              if (data.data) {
                _this6.allMyApplications = data.data;

                _this6.checkJobPosts();
              }
            });
          }
        }, {
          key: "checkJobPosts",
          value: function checkJobPosts() {
            var _this7 = this;

            this.allJobPost.forEach(function (post) {
              if (_this7.allMyApplications.find(function (data) {
                return data.jobPostId === post._id;
              })) {
                post.isApplied = true;
              }
            });
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.refineInitial.partTime = this.refineDefaultInitial.partTime;
            this.refineInitial.fullTime = this.refineDefaultInitial.fullTime;
            this.refineInitial.jobs = this.refineDefaultInitial.jobs;
            this.refineInitial.internships = this.refineDefaultInitial.internships;
            this.refineInitial.remote = this.refineDefaultInitial.remote;
            this.refineInitial.minExp = this.refineDefaultInitial.minExp;
            this.refineInitial.location = this.refineDefaultInitial.location;
            this.refine.partTime = this.refineDefaultInitial.partTime;
            this.refine.fullTime = this.refineDefaultInitial.fullTime;
            this.refine.jobs = this.refineDefaultInitial.jobs;
            this.refine.internships = this.refineDefaultInitial.internships;
            this.refine.remote = this.refineDefaultInitial.remote;
            this.refine.minExp = this.refineDefaultInitial.minExp;
            this.refine.location = this.refineDefaultInitial.location;
            this.selectedLocations.clear();
            this.refineJobs();
            this.isSortByExpanded = false;
            this.isLocationExpanded = false;
            this.isPartTimeExpanded = false;
            this.isJobCategoryExpanded = false;
            this.isRemoteExpanded = false;
            this.isExperienceExpanded = false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            if (window.screen.width > 1150) {
              this.isScreenBig = true;
              this.refineJobsDropDown = true;
            }

            this.isServiceRunning = true;
            var db = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              }
            };
            this.authService.find(db).subscribe(function (data) {
              if (data.data.length > 0) {
                _this8.filteredJobPosts = data.data;
                _this8.allJobPost = data.data;

                _this8.getMyApplication();

                _this8.sortByDate();

                _this8.isServiceRunning = false;
              }
            });
            var dbOpeartion = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              },
              selectedFields: {
                'jobPost.location': 1,
                _id: 0
              }
            };
            this.authService.find(dbOpeartion).subscribe(function (data) {
              if (data.data.length > 0) {
                data.data.forEach(function (ele) {
                  _this8.allLocations.add(ele.jobPost.location);
                });
              }
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(data) {
            if (this.role === 2) {
              this.router.navigateByUrl("/referer/jobs/job-detail/".concat(data._id));
            } else if (this.role === 0) {
              this.router.navigateByUrl("/admin/jobs/detail/".concat(data._id));
            } else if (this.role === 1) {
              this.router.navigateByUrl("/recruiter/job-posts/detail/".concat(data._id));
            }
          }
        }, {
          key: "_filter",
          value: function _filter(name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) {
              return option.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "filterJobPosts",
          value: function filterJobPosts() {
            var _this9 = this;

            var search = this.myControl.value;

            if (search) {
              search = search.toLowerCase();
            } else {
              search = '';
            }

            this.filteredJobPosts = [];
            this.allJobPost.forEach(function (jobPost, index) {
              if (jobPost.jobPost.title.toLowerCase().includes(search)) {
                _this9.filteredJobPosts.push(JSON.stringify(jobPost));
              }

              jobPost.jobPost.skills.forEach(function (element) {
                var name = element.skillName;

                if (name.toLowerCase().includes(search)) {
                  _this9.filteredJobPosts.push(JSON.stringify(jobPost));
                }
              });

              if (_this9.allJobPost.length === index + 1) {
                var arr = _toConsumableArray(new Set(_this9.filteredJobPosts));

                _this9.filteredJobPosts = [];
                arr.forEach(function (data) {
                  _this9.filteredJobPosts.push(JSON.parse(data));
                });
              }
            });
          }
        }, {
          key: "sortByDate",
          value: function sortByDate() {
            this.filteredJobPosts.sort(function (a, b) {
              var dateA = new Date(a.jobPost.createdAt);
              var dateB = new Date(b.jobPost.createdAt);
              return dateB - dateA;
            });
          }
        }, {
          key: "getExperience",
          value: function getExperience(value) {
            return "".concat(value);
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(date) {
            var date1 = new Date();
            var date2 = new Date(date);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 7;
          }
        }, {
          key: "updateLocation",
          value: function updateLocation(event, location) {
            if (event.checked === true) {
              this.selectedLocations.add(location);
            } else {
              this.selectedLocations["delete"](location);
            }

            this.refine.location = _toConsumableArray(this.selectedLocations);
          }
        }, {
          key: "checkLocation",
          value: function checkLocation(location) {
            return this.selectedLocations.has(location);
          }
        }, {
          key: "refineJobs",
          value: function refineJobs() {
            var _this10 = this;

            this.isServiceRunning = true;
            var dbOpeartion = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              }
            };

            if (this.refine.partTime && this.refine.fullTime) {//
            } else if (this.refine.partTime) {
              dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
            } else if (this.refine.fullTime) {
              dbOpeartion.query['jobPost.partTime'] = false;
            }

            if (this.refine.jobs && this.refine.internships) {//
            } else if (this.refine.jobs) {
              dbOpeartion.query['jobPost.jobInternship'] = 'Job';
            } else if (this.refine.internships) {
              dbOpeartion.query['jobPost.jobInternship'] = 'Internship';
            }

            if (this.refine.remote) {
              dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
            }

            if (this.selectedLocations.size > 0) {
              dbOpeartion.query['jobPost.location'] = {
                $in: _toConsumableArray(this.selectedLocations)
              };
            }

            if (this.refine.minExp > 0) {
              dbOpeartion.query['jobPost.experience'] = {
                $gt: this.refine.minExp ? this.refine.minExp - 1 : 0
              };
            }

            this.authService.find(dbOpeartion).subscribe(function (data) {
              if (data.data) {
                _this10.filteredJobPosts = data.data;
                _this10.allJobPost = data.data;

                _this10.checkJobPosts();

                _this10.refineInitial.partTime = _this10.refine.partTime, _this10.refineInitial.fullTime = _this10.refine.fullTime, _this10.refineInitial.jobs = _this10.refine.jobs, _this10.refineInitial.internships = _this10.refine.internships, _this10.refineInitial.remote = _this10.refine.remote, _this10.refineInitial.minExp = _this10.refine.minExp, _this10.refineInitial.location = _this10.refine.location;

                if (!_this10.isScreenBig) {
                  _this10.refineJobsDropDown = false;
                }

                _this10.filterJobPosts();

                _this10.sortByDate();

                _this10.isServiceRunning = false;
              }
            });
          }
        }]);

        return AllJobPostsComponent;
      }();

      AllJobPostsComponent.ctorParameters = function () {
        return [{
          type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_5__["JobPostServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      };

      AllJobPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-all-job-posts',
        template: _raw_loader_all_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AllJobPostsComponent);
      /***/
    },

    /***/
    "HY4x":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/view-profile/view-profile.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ViewProfileComponent */

    /***/
    function HY4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function () {
        return ViewProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view-profile.component.html */
      "XQCc");
      /* harmony import */


      var _view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-profile.component.scss */
      "YYSD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/storage */
      "g1va");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");

      var ViewProfileComponent = /*#__PURE__*/function () {
        function ViewProfileComponent(storage, menu, route, modalRef, modalService, authService, toastService) {
          _classCallCheck(this, ViewProfileComponent);

          this.storage = storage;
          this.menu = menu;
          this.route = route;
          this.modalRef = modalRef;
          this.modalService = modalService;
          this.authService = authService;
          this.toastService = toastService;
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/recruiter/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/recruiter/profile'
          }, {
            name: 'JOB POSTS',
            route: '/recruiter/job-posts'
          }, {
            name: 'MANAGE APPLICANTS',
            route: '/recruiter/applicants'
          }, {
            name: 'ADD JOB POST',
            route: '/recruiter/create-job-posts'
          }];
          this.basePath = '/profile-resumes';
          this.user = {};
          this.isEditing = false;
          this.isBasiDetailEditing = false;
          this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.skillsArray = [];
          this.isServiceRunning = false;
          this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
          });
          this.workExpToUpdate = undefined;
          this.workExpArray = [];
          this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
          this.educationToUpdate = undefined;
          this.educationArray = [];
          this.cvHeadLine = '';
          this.isCVHeadEditing = false;
          this.maxDob = new Date(2006, 11, 31);
          this.userId = '';
        }

        _createClass(ViewProfileComponent, [{
          key: "openResume",
          value: function openResume() {
            window.open(this.user.resume, '_blank');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.initializeProfileForm();
            this.route.params.subscribe(function (params) {
              if (params.id) {
                _this11.userId = params.id; // this.getDetails();

                _this11.getUser();
              }
            });
          }
        }, {
          key: "setBasicInfo",
          value: function setBasicInfo() {
            if (this.user.basicInfo) {
              this.profileForm.patchValue({
                mobile: this.user.basicInfo.mobile,
                gender: this.user.basicInfo.gender,
                martialStatus: this.user.basicInfo.martialStatus,
                dob: this.user.basicInfo.dob,
                nationality: this.user.basicInfo.nationality
              });
            } else {
              this.profileForm.reset();
            }
          }
        }, {
          key: "initializeProfileForm",
          value: function initializeProfileForm() {
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              martialStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
              nationality: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
            });
          }
        }, {
          key: "calculateExp",
          value: function calculateExp() {
            var total = 0;

            var _iterator = _createForOfIteratorHelper(this.workExpArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var post = _step.value;
                var dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
                var dateSecond = new Date(post.startDate); // time difference

                var timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime()); // days difference

                var diffYears = timeDiff / (1000 * 3600 * 24 * 365);
                total += diffYears;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return total.toFixed(0);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this12 = this;

            this.isServiceRunning = true;
            this.authService.find({
              collection: 'users',
              query: {
                _id: this.userId,
                role: 2
              }
            }).subscribe(function (data) {
              if (data.data.length > 0) {
                _this12.user = data.data[0];

                _this12.setBasicInfo();

                if (_this12.user.cvHead) {
                  _this12.cvHeadLine = _this12.user.cvHead;
                }

                _this12.educationArray = _this12.user.education ? _this12.user.education : [];
                _this12.workExpArray = _this12.user.workExperience ? _this12.user.workExperience : [];
                _this12.skillsArray = _this12.user.skills ? _this12.user.skills : [];
                _this12.isServiceRunning = false;
              } else {
                _this12.authService.find({
                  collection: 'referedProfiles',
                  query: {
                    _id: _this12.userId
                  }
                }).subscribe(function (pata) {
                  if (pata.data.length > 0) {
                    _this12.user = pata.data[0];

                    _this12.setBasicInfo();

                    if (_this12.user.cvHead) {
                      _this12.cvHeadLine = _this12.user.cvHead;
                    }

                    _this12.educationArray = _this12.user.education ? _this12.user.education : [];
                    _this12.workExpArray = _this12.user.workExperience ? _this12.user.workExperience : [];
                    _this12.skillsArray = _this12.user.skills ? _this12.user.skills : [];
                    _this12.isServiceRunning = false;
                  }
                });
              }
            });
          }
        }, {
          key: "profileCompleted",
          get: function get() {
            var percent = 12;

            if (this.cvHeadLine) {
              percent += 10;
            }

            if (this.workExpArray.length > 0) {
              percent += 15;
            }

            if (this.skillsArray.length > 0) {
              percent += 12;
            }

            if (this.educationArray.length > 0) {
              percent += 11;
            }

            if (this.user.resume) {
              percent += 15;
            }

            if (this.user.basicInfo) {
              percent += 15;
            }

            if (this.user.photo) {
              percent += 10;
            }

            document.getElementById('progress-bar').style.width = percent + '%';
            return percent;
          }
        }]);

        return ViewProfileComponent;
      }();

      ViewProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__["ToastService"]
        }];
      };

      ViewProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-view-profile',
        template: _raw_loader_view_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewProfileComponent);
      /***/
    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          var _this13 = this;

          _classCallCheck(this, AuthService);

          this.http = http;
          this.user = {};
          this.isScreenBig = false;
          this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json'
          });
          this.baseUrl = '';
          this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
          this.getCurrentUser();

          if (window.screen.width > 1150) {
            this.isScreenBig = true;
          }

          if (window.localStorage.getItem('id')) {
            var dbOperation = {
              collection: 'users',
              query: {
                _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id
              }
            };
            this.find(dbOperation).subscribe(function (data) {
              if (data.data) {
                _this13.user = data.data[0];
              }
            });
          }
        }

        _createClass(AuthService, [{
          key: "linkedInLogin",
          value: function linkedInLogin() {
            return this.http.get("https://www.linkedin.com/oauth/v2/authorization?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8084%2Fcallback%2F&scope=r_emailaddress%20r_liteprofile&client_id=78pijkn0197pgp", {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            });
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this14 = this;

            if (window.localStorage.getItem('id')) {
              this.getDetails({
                email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email
              }).subscribe(function (data) {
                _this14.currentUser.next(data.data);
              });
            }
          }
        }, {
          key: "registerCandidate",
          value: function registerCandidate(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/register/candidate", body, {
              headers: this.headers
            });
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/verify/candidate", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "login",
          value: function login(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/login", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "updateAdminDetails",
          value: function updateAdminDetails(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/updateAdminDetails", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "create",
          value: function create(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/create", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "update",
          value: function update(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/update", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "find",
          value: function find(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/find", body, {
              headers: this.headers
            });
          }
        }, {
          key: "updateUserDetails",
          value: function updateUserDetails(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/updateUserDetails", body, {
              headers: this.headers
            }).toPromise();
          }
        }, {
          key: "getDetails",
          value: function getDetails(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/getDetails", body, {
              headers: this.headers
            });
          }
        }, {
          key: "getOTP",
          value: function getOTP(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/otpRequest", body, {
              headers: this.headers
            });
          }
        }, {
          key: "sendMail",
          value: function sendMail(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/send-mail", body, {
              headers: this.headers
            });
          }
        }, {
          key: "verify",
          value: function verify(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/verifyOTP", body, {
              headers: this.headers
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "Ia/W":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/nav-bar-content/nav-bar-content.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IaW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row shadow justify-content-center p-0 m-0\">\n  <div class=\"col-sm-12 shadow\">\n    <nav class=\"navbar navbar-expand-lg col-sm-11 navbar-light bg-light w-100 \">\n      <a class=\"nav-link mr-1\"><img src=\"../../../../assets/refer2carrierlogo.png\" class=\"logo-header\" alt=\"\">\n      </a>\n      <button class=\"navbar-toggler collapsed\" (click)=\"isCollapsed = !isCollapsed\" type=\"button\" aria-expanded=\"false\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"ml-3 collapse navbar-collapse vertical-center justify-content-between\" id=\"navbarNav\"\n        [collapse]=\"isCollapsed\" [isAnimated]=\"true\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item mr-4\" *ngFor=\"let item of navItems\">\n            <a class=\"nav-link text-dark myfont-size text-link active-button pl-3 pr-3\"\n              [ngClass]=\"url.includes(item.route) ? 'active-url' : ''\" (click)=\"navigate(item.route)\"> {{item.name}}</a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n          <li>\n            <a (click)=\"openModal(logout)\"><button class=\"btn btn-primary\"><span class=\"vertical-center\">\n                  <ion-icon name=\"lock-closed\" class=\"mr-1\"></ion-icon>LOGOUT\n                </span></button></a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n\n\n<ng-template #logout>\n  <div class=\"bg-white box-shadow text-lato p-3 m-3\" style=\"border-radius: 10px;\">\n    Are you sure you want to logout?\n    <div class=\"d-flex justify-content-end px-2 mt-2\">\n      <button class=\"btn btn-secondary p-0 text-smd px-2 mr-3\" (click)=\"loggedOut()\">Yes</button>\n      <button class=\"btn btn-primary text-smd px-2 p-0\" (click)=\"cancel()\">No</button>\n    </div>\n  </div>\n</ng-template>\n\n";
      /***/
    },

    /***/
    "JALx":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/not-found/not-found.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function JALx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "K5Im":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/manage-applicants/manage-applicants.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ManageApplicantsComponent */

    /***/
    function K5Im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageApplicantsComponent", function () {
        return ManageApplicantsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-applicants.component.html */
      "D5Ig");
      /* harmony import */


      var _manage_applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-applicants.component.scss */
      "E61o");
      /* harmony import */


      var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/enums */
      "pzb0");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ManageApplicantsComponent = /*#__PURE__*/function () {
        function ManageApplicantsComponent(dbService, router) {
          _classCallCheck(this, ManageApplicantsComponent);

          this.dbService = dbService;
          this.router = router;
          this.allPosts = [];
          this.isServiceRunning = false;
        }

        _createClass(ManageApplicantsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllJobs();
          }
        }, {
          key: "getAllJobs",
          value: function getAllJobs() {
            var _this15 = this;

            this.isServiceRunning = true;
            var dbOperation = {
              collection: 'jobposts',
              query: {
                'jobPost.createdBy': JSON.parse(window.atob(window.localStorage.getItem('id')))._id
              }
            };
            this.dbService.find(dbOperation).subscribe(function (data) {
              if (data.data.length > 0) {
                _this15.allPosts = data.data;

                _this15.allPosts.sort(function (a, b) {
                  var c = new Date(a.jobPost.createdAt);
                  var d = new Date(b.jobPost.createdAt);
                  return d - c;
                });
              }

              _this15.isServiceRunning = false;
            });
          }
        }, {
          key: "navigate",
          value: function navigate(id) {
            if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].ADMIN) {
              this.router.navigateByUrl("/admin/applicants/".concat(id));
            } else {
              this.router.navigateByUrl("/recruiter/applicants/".concat(id));
            }
          }
        }]);

        return ManageApplicantsComponent;
      }();

      ManageApplicantsComponent.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ManageApplicantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-manage-applicants',
        template: _raw_loader_manage_applicants_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_applicants_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManageApplicantsComponent);
      /***/
    },

    /***/
    "OPFr":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OPFr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"footer-bottom bg-primary \" style=\"min-height: 5vh;\">\n  <div class=\"text-center text-white py-3 px-2\">© 2021 Refer 2 Career. All Rights Reserved.\n  </div>\n</div>";
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/view-profile/view-profile.component */
      "HY4x");
      /* harmony import */


      var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/not-found/not-found.component */
      "0dfH");
      /* harmony import */


      var _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/applications/applications.component */
      "iwS4");
      /* harmony import */


      var _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/manage-applicants/manage-applicants.component */
      "K5Im");
      /* harmony import */


      var _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/add-job-post/add-job-post.component */
      "8ymR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "UXJo");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "B/XX");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "FvrZ");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "psEu");
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      "hzby");
      /* harmony import */


      var _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./components/add-job-post/job-details/job-details.component */
      "shd7");
      /* harmony import */


      var _components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./components/spinner-component/spinner-component.component */
      "eDag");
      /* harmony import */


      var _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ./components/all-job-posts/all-job-posts.component */
      "Fg4b");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ./components/nav-bar-content/nav-bar-content.component */
      "Xsf5");
      /* harmony import */


      var _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ./components/recent-jobs/recent-jobs.component */
      "Vxhh");
      /* harmony import */


      var _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ./components/emp-recent-job-posts/emp-recent-job-posts.component */
      "z7Ah");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! @angular/fire */
      "05qF");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! @angular/fire/storage */
      "g1va");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! ./auth-guard/auth-guard */
      "fJ1W");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_61__["SpinnerComponentComponent"], _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_60__["JobDetailsComponent"], _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_62__["AllJobPostsComponent"], _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_4__["ManageApplicantsComponent"], _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationsComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__["ViewProfileComponent"], _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_65__["NavBarContentComponent"], _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_66__["RecentJobsComponent"], _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_67__["EmpRecentJobPostsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_71__["FooterComponent"]],
        entryComponents: [_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_4__["ManageApplicantsComponent"]],
        imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_68__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_70__["firebaseConfig"]), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_69__["AngularFireStorageModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_63__["NgSelectModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_58__["AlertModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_59__["BsDatepickerModule"].forRoot(), ng_otp_input__WEBPACK_IMPORTED_MODULE_57__["NgOtpInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_18__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_34__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_44__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_48__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_51__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_52__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_54__["IonicModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_64__["CollapseModule"].forRoot()],
        exports: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _components_spinner_component_spinner_component_component__WEBPACK_IMPORTED_MODULE_61__["SpinnerComponentComponent"], _components_view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_1__["ViewProfileComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_58__["AlertModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_57__["NgOtpInputModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_59__["BsDatepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_16__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_18__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_34__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_38__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_39__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_41__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_44__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_45__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_46__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_47__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_48__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_50__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_51__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_52__["MatTreeModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_53__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_54__["IonicModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _components_add_job_post_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_60__["JobDetailsComponent"], _components_all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_62__["AllJobPostsComponent"], _components_manage_applicants_manage_applicants_component__WEBPACK_IMPORTED_MODULE_4__["ManageApplicantsComponent"], _components_applications_applications_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationsComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_63__["NgSelectModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_64__["CollapseModule"], _components_nav_bar_content_nav_bar_content_component__WEBPACK_IMPORTED_MODULE_65__["NavBarContentComponent"], _components_recent_jobs_recent_jobs_component__WEBPACK_IMPORTED_MODULE_66__["RecentJobsComponent"], _components_emp_recent_job_posts_emp_recent_job_posts_component__WEBPACK_IMPORTED_MODULE_67__["EmpRecentJobPostsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_71__["FooterComponent"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_56__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_55__["SplashScreen"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["BsModalRef"], _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_72__["RouteGuard"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], SharedModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/models/enums */
      "pzb0");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(location, platform, splashScreen, statusBar, router, authService) {
          _classCallCheck(this, AppComponent);

          this.location = location;
          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.authService = authService;
          this.role = _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"];
          this.initializeApp();

          if (window.localStorage.getItem('id')) {
            if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].CANDIDATE) {
              if (!this.location.path().includes('referer')) {
                this.router.navigateByUrl('/referer');
              }
            } else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].ADMIN) {
              if (!this.location.path().includes('admin')) {
                this.router.navigateByUrl('/admin');
              }
            } else if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _shared_models_enums__WEBPACK_IMPORTED_MODULE_8__["UserRole"].EMPLOYER) {
              if (!this.location.path().includes('recruiter')) {
                this.router.navigateByUrl('/recruiter');
              }
            }
          } else {
            if (!this.location.path().includes('login')) {
              this.router.navigateByUrl('/login');
            }
          }
        }

        _createClass(AppComponent, [{
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            this.platform.ready().then(function () {});
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UV+q":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/applications/applications.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UVQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\n<div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\">\n  <div class=\"h-100 w-100 bg-lightest-blue\" style=\"overflow-y: auto;\" *ngIf=\"!isServiceRunning\">\n    <div class=\"bg-primary w-100 text-white\"\n      style=\"min-height: 240px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\n    </div>\n    <h3 class=\"text-md text-center text-white\" style=\"margin-top: -160px !important;\">{{post.jobPost ?\n      post.jobPost.title : ''}}</h3>\n    <div class=\"row p-0 m-0 justify-content-center\">\n      <div class=\"col-sm-10 p-2\" style=\"overflow-y: auto !important; overflow-x: hidden;\">\n        <div class=\"w-100 vh-100\" *ngIf=\"!isServiceRunning\">\n          <div class=\"p-2 bg-white border-10 w-100 vh-100\"\n            style=\"margin-top: 20px !important; overflow-y: auto !important;\">\n            <div class=\"row justify-content-center vertical-center mt-5\">\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" [ngClass]=\"isApplicationRecieved ? 'active-menu' : ''\"\n                (click)=\"changeTopMenu(0)\">\n                <span class=\"mr-2\">Applications</span>\n                <span class=\"badge badge-light\">{{applicationRecieved}}</span>\n              </div>\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(1)\"\n                [ngClass]=\"isShortlisted ? 'active-menu' : ''\">\n                <span class=\"mr-2\">Shortlisted</span>\n                <span class=\"badge badge-light\">{{totalShortlisted}}</span>\n              </div>\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(2)\"\n                [ngClass]=\"isHired ? 'active-menu' : ''\">\n                <span class=\"mr-2\">Hired</span>\n                <span class=\"badge badge-light\">{{totalHired}}</span>\n              </div>\n              <div class=\"mr-3 p-2 col-auto text-link border-8\" (click)=\"changeTopMenu(3)\"\n                [ngClass]=\"isRejected ? 'active-menu' : ''\">\n                <span class=\"mr-2\">Rejected</span>\n                <span class=\"badge badge-light\">{{totalRejected}}</span>\n              </div>\n            </div>\n            <div class=\"vertical-center justify-content-end\" *ngIf=\"false\">\n              <button class=\"btn btn-outline-primary text-sm mr-2\" (click)=\"openFilter(filter)\">Add Filter</button>\n            </div>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-sm-8 my-2\">\n                <div *ngFor=\"let data of skillsArray; index as i\" class=\"p-1 px-2 bg-violet vertical-center\"\n                  style=\"display: inline-block; border-radius: 5px; width: max-content; margin: 3px !important; white-space:nowrap;\">\n                  <span class=\"text-white mr-3\">{{data}}</span>\n                  <span class=\"material-icons text-xs text-white text-link pt-1\"\n                    (click)=\"removeFromFilter(i)\">close</span>\n                </div>\n                <div class=\"p-1 px-2 bg-violet vertical-center\" *ngIf=\"minExp\"\n                  style=\"display: inline-block; border-radius: 5px; width: max-content; margin: 3px !important; white-space:nowrap;\">\n                  <span class=\"text-white mr-3\">Minimum Experience: {{minExp}} Years</span>\n                  <span class=\"material-icons text-xs text-white text-link pt-1\" (click)=\"removeExp()\">close</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"mt-4 row p-3 justify-content-center\">\n              <div class=\"col-sm-8 d-flex justify-content-center p-3\" *ngIf=\"isApplicationRecieved\">\n                <button class=\"btn btn-primary fall-animation\" *ngIf=\"totalChecked\"\n                  (click)=\"openConfirmModal(confirmModal, 'Shortlist')\">Shortlist</button>\n              </div>\n              <div class=\"col-sm-8 d-flex justify-content-center p-3\" *ngIf=\"isShortlisted\">\n                <button class=\"btn btn-primary fall-animation mr-2\" *ngIf=\"totalChecked\"\n                  (click)=\"openConfirmModal(confirmModal, 'Hire')\">Hire</button>\n                <button class=\"btn btn-primary fall-animation\" *ngIf=\"totalChecked\"\n                  (click)=\"openConfirmModal(confirmModal, 'Reject')\">Reject</button>\n              </div>\n              <table class=\"table col-sm-11 mt-3\" *ngIf=\"filteredCandidates.length > 0\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">\n                      <mat-checkbox *ngIf=\"!isRejected && !isHired\" class=\"example-margin text-uppercase\"\n                        [checked]=\"totalChecked == filteredCandidates.length\" (change)=\"checkAll()\">\n                      </mat-checkbox>\n                    </th>\n                    <th scope=\"col\">SN</th>\n                    <th scope=\"col\">Name</th>\n                    <th scope=\"col\">Email</th>\n                    <th scope=\"col\">Resume</th>\n                    <th scope=\"col\">Profile Status</th>\n                    <th scope=\"col\"></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let user of filteredCandidates; index as i\">\n                    <td>\n                      <mat-checkbox *ngIf=\"!isRejected && !isHired\" (change)=\"checkedUser(i)\"\n                        class=\"example-margin text-uppercase \" [checked]=\"user.isChecked\">\n                      </mat-checkbox>\n                    </td>\n                    <td>{{i + 1}}</td>\n                    <td>{{user.name}}</td>\n                    <td>{{user.email}}</td>\n                    <td><span (click)=\"openResume(user.resume)\" class=\"material-icons text-primary text-lg text-link\">\n                        cloud_download\n                      </span></td>\n                    <td>{{user.profileCompleted}}% Completed</td>\n                    <td >\n                      <div class=\"col-sm-10 d-flex bg-primary text-link border-8 p-2 d-flex vertical-center\">\n                        <span class=\"text-white justify-content-center text-sm\" (click)=\"viewProfile(user._id)\">View Profile</span>\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <app-not-found *ngIf=\"filteredCandidates.length === 0\" message=\"No Application Available\" ></app-not-found>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n   \n</div>\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>\n\n<ng-template #filter>\n  <div class=\"row p-0 pl-0 ml-0 vh-100 justify-content-end\">\n    <div class=\"col-sm-3 p-0 pl-0 ml-0 h-100 bg-white\">\n      <div class=\"p-3 pt-5 h-100\">\n        <div class=\"vertical-center justify-content-between mb-5\">\n          <span class=\"semi-bold text-md\">Filter</span>\n          <span class=\"material-icons text-link text-md bold mr-3\" (click)=\"closeModal()\">close</span>\n        </div>\n\n        <div class=\"mr-3 mb-3\">\n          <label class=\"text-grey\">Skills</label>\n          <ng-select placeholder=\"Select skills\" [multiple]=\"true\" [(ngModel)]=\"skillsArray\">\n            <ng-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\n              {{option}}</ng-option>\n          </ng-select>\n        </div>\n        <div class=\"mr-3\">\n          <label class=\"text-grey\">Minimum Experience (in years)</label>\n          <input class=\"form-control\" type=\"number\" [(ngModel)]=\"minExp\" placeholder=\"Enter Experience\">\n        </div>\n      </div>\n      <div class=\"my-3 position-absolute w-100\" style=\"bottom: 0px !important; padding: 0px;\">\n        <hr class=\"w-100\">\n        <div class=\"vertical-center justify-content-center py-3 mb-5\">\n          <span class=\"text-primary text-smd mr-3 text-violet text-link\" (click)=\"clearFilter()\">Clear all</span>\n          <button class=\"btn btn-primary bg-violet text-sm\" (click)=\"seeResults()\">See Results</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #skillModal>\n  <div class=\"bg-white p-3\" style=\"border-radius: 7px;\">\n    <div class=\"d-block text-right\">\n      <span class=\"material-icons text-grey text-right text-link\" (click)=\"closeModal()\">close</span>\n    </div>\n    <span class=\"text-grey semi-bold d-block text-center my-2\">ADD SKILL</span>\n    <div class=\"row p-0 px-2 m-3\">\n      <div class=\"col-sm-12 mt-3\">\n        <mat-form-field class=\"p-0 w-100 mat-form-field\">\n          <mat-label>Skill Name</mat-label>\n          <input type=\"text\" placeholder=\"Ex. JAVA\" aria-label=\"Number\" matInput [formControl]=\"skillName\"\n            [matAutocomplete]=\"auto\">\n          <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of filteredSkills | async\" [value]=\"option\">\n              {{option}}\n            </mat-option>\n          </mat-autocomplete>\n          <mat-error>Enter valid detail</mat-error>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"w-100 d-flex justify-content-end mt-4\">\n      <button class=\"btn btn-primary bg-violet py-1 px-2\" (click)=\"addSkill()\">ADD SKILL</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #confirmModal>\n  <div class=\"p-3 bg-white\" style=\"border-radius: 10px;\">\n    <div class=\"w-100 text-right\">\n      <span class=\"material-icons text-link text-smd text-grey bold\" (click)=\"closeModal()\">close</span>\n    </div>\n    <div class=\"w-100 text-center\">\n      <span class=\"text-grey text-slmd\">Are you sure, you want to {{confirmModalStatus}} the selected applicants\n      </span>\n    </div>\n    <div class=\"mt-4 vertical-center justify-content-center\">\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Shortlist'\"\n        (click)=\"updateStatus('Shortlisted')\">Shortlist</button>\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Hire'\"\n        (click)=\"updateStatus('Hired')\">Hire</button>\n      <button class=\"btn btn-primary text-sm\" *ngIf=\"confirmModalStatus === 'Reject'\"\n        (click)=\"updateStatus('Rejected')\">Reject</button>\n    </div>\n  </div>\n</ng-template>";
      /***/
    },

    /***/
    "Vxhh":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/recent-jobs/recent-jobs.component.ts ***!
      \************************************************************************/

    /*! exports provided: RecentJobsComponent */

    /***/
    function Vxhh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecentJobsComponent", function () {
        return RecentJobsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_recent_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./recent-jobs.component.html */
      "FITq");
      /* harmony import */


      var _recent_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recent-jobs.component.scss */
      "9uHk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RecentJobsComponent = /*#__PURE__*/function () {
        function RecentJobsComponent(jobPostService, router, authService) {
          _classCallCheck(this, RecentJobsComponent);

          this.jobPostService = jobPostService;
          this.router = router;
          this.authService = authService;
          this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
          this.isUser = true;
          this.allJobPost = [];
          this.filteredJobPosts = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
          this.options = ['Delivery boy', 'Software engineer', 'UI designer'];
          this.isSortByExpanded = false;
          this.isLocationExpanded = false;
          this.isPartTimeExpanded = false;
          this.isJobCategoryExpanded = false;
          this.isRemoteExpanded = false;
          this.isExperienceExpanded = false;
          this.allLocations = new Set();
          this.selectedLocations = new Set();
          this.selectedLocationsArray = [];
          this.isRelevent = false;
          this.isServiceRunning = false;
          this.isSortBy = false;
          this.isScreenBig = false;
          this.refineInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refineDefaultInitial = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refine = {
            partTime: false,
            fullTime: false,
            jobs: false,
            internships: false,
            remote: false,
            minExp: 0,
            location: []
          };
          this.refineJobsDropDown = false;
          this.allMyApplications = [];
          this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
        }

        _createClass(RecentJobsComponent, [{
          key: "isChanged",
          value: function isChanged() {
            return !(JSON.stringify(this.refine) === JSON.stringify(this.refineInitial));
          }
        }, {
          key: "isFilterAdded",
          value: function isFilterAdded() {
            return !(JSON.stringify(this.refine) === JSON.stringify(this.refineDefaultInitial));
          }
        }, {
          key: "closeSortBy",
          value: function closeSortBy(value) {
            this.isSortBy = value;
            this.isSortByExpanded = false;
          }
        }, {
          key: "openRefineJobs",
          value: function openRefineJobs() {
            if (!this.isScreenBig) {
              this.refineJobsDropDown = !this.refineJobsDropDown;
            }
          }
        }, {
          key: "getMyApplication",
          value: function getMyApplication() {
            var _this16 = this;

            var db = {
              collection: 'applyJob',
              query: {
                candidateId: this.user._id
              },
              selectedFields: {
                jobPostId: 1,
                _id: 0
              }
            };
            this.authService.find(db).subscribe(function (data) {
              if (data.data) {
                _this16.allMyApplications = data.data;

                _this16.checkJobPosts();
              }
            });
          }
        }, {
          key: "checkJobPosts",
          value: function checkJobPosts() {
            var _this17 = this;

            this.allJobPost.forEach(function (post) {
              if (_this17.allMyApplications.find(function (data) {
                return data.jobPostId === post._id;
              })) {
                post.isApplied = true;
              }
            });
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.refineInitial.partTime = this.refineDefaultInitial.partTime;
            this.refineInitial.fullTime = this.refineDefaultInitial.fullTime;
            this.refineInitial.jobs = this.refineDefaultInitial.jobs;
            this.refineInitial.internships = this.refineDefaultInitial.internships;
            this.refineInitial.remote = this.refineDefaultInitial.remote;
            this.refineInitial.minExp = this.refineDefaultInitial.minExp;
            this.refineInitial.location = this.refineDefaultInitial.location;
            this.refine.partTime = this.refineDefaultInitial.partTime;
            this.refine.fullTime = this.refineDefaultInitial.fullTime;
            this.refine.jobs = this.refineDefaultInitial.jobs;
            this.refine.internships = this.refineDefaultInitial.internships;
            this.refine.remote = this.refineDefaultInitial.remote;
            this.refine.minExp = this.refineDefaultInitial.minExp;
            this.refine.location = this.refineDefaultInitial.location;
            this.selectedLocations.clear();
            this.refineJobs();
            this.isSortByExpanded = false;
            this.isLocationExpanded = false;
            this.isPartTimeExpanded = false;
            this.isJobCategoryExpanded = false;
            this.isRemoteExpanded = false;
            this.isExperienceExpanded = false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            if (window.screen.width > 1150) {
              this.isScreenBig = true;
              this.refineJobsDropDown = true;
            }

            this.isServiceRunning = true;
            var db = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              }
            };
            this.authService.find(db).subscribe(function (data) {
              if (data.data.length > 0) {
                _this18.filteredJobPosts = data.data;
                _this18.allJobPost = data.data;

                _this18.getMyApplication();

                _this18.sortByDate();

                _this18.isServiceRunning = false;
              }
            });
            var dbOpeartion = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              },
              selectedFields: {
                'jobPost.location': 1,
                _id: 0
              }
            };
            this.authService.find(dbOpeartion).subscribe(function (data) {
              if (data.data.length > 0) {
                data.data.forEach(function (ele) {
                  _this18.allLocations.add(ele.jobPost.location);
                });
              }
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(data) {
            if (this.role === 2) {
              this.router.navigateByUrl("/referer/jobs/job-detail/".concat(data._id));
            } else if (this.role === 0) {
              this.router.navigateByUrl("/admin/jobs/detail/".concat(data._id));
            } else if (this.role === 1) {
              this.router.navigateByUrl("/recruiter/job-posts/detail/".concat(data._id));
            }
          }
        }, {
          key: "_filter",
          value: function _filter(name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) {
              return option.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "filterJobPosts",
          value: function filterJobPosts() {
            var _this19 = this;

            var search = this.myControl.value;

            if (search) {
              search = search.toLowerCase();
            } else {
              search = '';
            }

            this.filteredJobPosts = [];
            this.allJobPost.forEach(function (jobPost, index) {
              if (jobPost.jobPost.title.toLowerCase().includes(search)) {
                _this19.filteredJobPosts.push(JSON.stringify(jobPost));
              }

              jobPost.jobPost.skills.forEach(function (element) {
                var name = element.skillName;

                if (name.toLowerCase().includes(search)) {
                  _this19.filteredJobPosts.push(JSON.stringify(jobPost));
                }
              });

              if (_this19.allJobPost.length === index + 1) {
                var arr = _toConsumableArray(new Set(_this19.filteredJobPosts));

                _this19.filteredJobPosts = [];
                arr.forEach(function (data) {
                  _this19.filteredJobPosts.push(JSON.parse(data));
                });
              }
            });
          }
        }, {
          key: "sortByDate",
          value: function sortByDate() {
            this.filteredJobPosts.sort(function (a, b) {
              var dateA = new Date(a.jobPost.createdAt);
              var dateB = new Date(b.jobPost.createdAt);
              return dateB - dateA;
            });
          }
        }, {
          key: "getExperience",
          value: function getExperience(value) {
            return "".concat(value);
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(date) {
            var date1 = new Date();
            var date2 = new Date(date);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 7;
          }
        }, {
          key: "updateLocation",
          value: function updateLocation(event, location) {
            if (event.checked === true) {
              this.selectedLocations.add(location);
            } else {
              this.selectedLocations["delete"](location);
            }

            this.refine.location = _toConsumableArray(this.selectedLocations);
          }
        }, {
          key: "checkLocation",
          value: function checkLocation(location) {
            return this.selectedLocations.has(location);
          }
        }, {
          key: "refineJobs",
          value: function refineJobs() {
            var _this20 = this;

            this.isServiceRunning = true;
            var dbOpeartion = {
              collection: 'jobposts',
              query: {
                'jobPost.verified': true
              }
            };

            if (this.refine.partTime && this.refine.fullTime) {//
            } else if (this.refine.partTime) {
              dbOpeartion.query['jobPost.partTime'] = this.refine.partTime;
            } else if (this.refine.fullTime) {
              dbOpeartion.query['jobPost.partTime'] = false;
            }

            if (this.refine.jobs && this.refine.internships) {//
            } else if (this.refine.jobs) {
              dbOpeartion.query['jobPost.jobInternship'] = 'Job';
            } else if (this.refine.internships) {
              dbOpeartion.query['jobPost.jobInternship'] = 'Internship';
            }

            if (this.refine.remote) {
              dbOpeartion.query['jobPost.jobType'] = this.refine.remote ? 'Work from home' : 'In office';
            }

            if (this.selectedLocations.size > 0) {
              dbOpeartion.query['jobPost.location'] = {
                $in: _toConsumableArray(this.selectedLocations)
              };
            }

            if (this.refine.minExp > 0) {
              dbOpeartion.query['jobPost.experience'] = {
                $gt: this.refine.minExp ? this.refine.minExp - 1 : 0
              };
            }

            this.authService.find(dbOpeartion).subscribe(function (data) {
              if (data.data) {
                _this20.filteredJobPosts = data.data;
                _this20.allJobPost = data.data;

                _this20.checkJobPosts();

                _this20.refineInitial.partTime = _this20.refine.partTime, _this20.refineInitial.fullTime = _this20.refine.fullTime, _this20.refineInitial.jobs = _this20.refine.jobs, _this20.refineInitial.internships = _this20.refine.internships, _this20.refineInitial.remote = _this20.refine.remote, _this20.refineInitial.minExp = _this20.refine.minExp, _this20.refineInitial.location = _this20.refine.location;

                if (!_this20.isScreenBig) {
                  _this20.refineJobsDropDown = false;
                }

                _this20.filterJobPosts();

                _this20.sortByDate();

                _this20.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "navigateToAllJobs",
          value: function navigateToAllJobs() {
            this.router.navigateByUrl("/referer/jobs");
          }
        }, {
          key: "navigateToMyProfile",
          value: function navigateToMyProfile() {
            this.router.navigateByUrl("/referer/profile");
          }
        }]);

        return RecentJobsComponent;
      }();

      RecentJobsComponent.ctorParameters = function () {
        return [{
          type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_6__["JobPostServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      RecentJobsComponent.propDecorators = {
        isUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      RecentJobsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recent-jobs',
        template: _raw_loader_recent_jobs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recent_jobs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RecentJobsComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <div\n    style=\"position:relative; overflow: auto; z-index: 999 !important; background-color: #f7f7f7;\">\n    <div style=\"min-height: 93vh !important;\">\n      <router-outlet></router-outlet>\n    </div>\n    <div style=\"bottom: 0; min-height: 5vh;\">\n      <app-footer class=\"mt-auto\"></app-footer>\n    </div>\n  </div>\n</ion-app>";
      /***/
    },

    /***/
    "WhTW":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/spinner-component/spinner-component.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function WhTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "XQCc":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/view-profile/view-profile.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function XQCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-nav-bar-content [navItems]=\"navItems\"></app-nav-bar-content>\n<!-- <div class=\"wh-100\" style=\"overflow-y: auto; overflow-x: hidden;\"> -->\n  <div class=\"h-100 w-100 bg-lightest-blue\" style=\"overflow-y: auto; overflow-x: hidden;\" *ngIf=\"!isServiceRunning\">\n    <div class=\"bg-primary w-100 text-white\"\n      style=\"min-height: 220px; border-bottom-left-radius: 80px; border-bottom-right-radius: 80px;\">\n    </div>\n    <h3 class=\"text-white text-center\" style=\"margin-top: -180px !important;\">Applicant Profile</h3>\n    <div class=\"row p-0 m-0 justify-content-center\">\n      <div class=\"col-sm-10 p-2 mt-5\" style=\"overflow-y: auto !important; overflow-x: hidden;\">\n        <div class=\"bg-white border-8\">\n          <div class=\"row\">\n            <div class=\"col-sm-10 align-self-center\">\n              <div class=\"p-3 m-2 row vertical-center justify-content-start\">\n                <div class=\"col-sm-2 d-flex justify-content-start mb-2\">\n                  <div>\n                    <div *ngIf=\"!user.photo\"\n                      class=\"bg-opacity vertical-center border-6 bg-primary mx-auto text-center text-white text-xxlg\"\n                      style=\"border-width: 2px; height: 130px !important; width: 125px !important; border: 2px solid rgb(255, 255, 255);\">\n                      <span class=\"w-100 text-center material-icons text-xxlg\">{{user\n                        ? user.name[0] : ''}}</span>\n                    </div>\n                    <img *ngIf=\"user.photo\" class=\"img-fulid border-6\"\n                      style=\"height: 130px !important; width: 125px !important; border: 2px solid white;\"\n                      src=\"{{user.photo}}\" alt=\"\">\n                  </div>\n                </div>\n                <div class=\"text-dark col-12 col-md-9 col-sm-10\">\n                  <div class=\"text-black semi-bold\" style=\"font-size: 30px;\">{{user.name}}</div>\n                  <div class=\"row vertical-center\">\n                    <div class=\"col-12 col-lg-5 my-2\">\n                      <span class=\"material-icons-outlined vertical-center text-smd mr-5\">mail\n                        <span class=\"ml-2\">{{user.email}}</span></span>\n                    </div>\n                    <div class=\"col-12 col-lg-7 my-2\">\n                      <span *ngIf=\"user.basicInfo\" class=\"material-icons-outlined vertical-center text-smd mr-4\">call\n                        <span class=\"ml-2\">{{user.basicInfo.mobile}}</span></span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12 row mt-4 p-0 m-0 justify-content-end\">\n          <div class=\"col-sm-4 p-2 m-0 mb-3\">\n            <div class=\"bg-white p-3 border-8\">\n              <span class=\"text-lg mb-4\">{{profileCompleted}}<span class=\"text-smd\">% Profile Completed</span></span>\n              <div class=\"progress\">\n                <div class=\"progress-bar\" id=\"progress-bar\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-8 m-0 p-2\">\n            <div class=\"p-3 mx-0 mb-3 bg-white border-8\">\n              <div class=\"vertical-center justify-content-between\">\n                <span class=\"text-black semi-bold myfont-size\">CV Headline</span>\n              </div>\n              <span class=\"text-smd my-4\" *ngIf=\"!isCVHeadEditing\">{{cvHeadLine ? cvHeadLine : ''}}</span>\n              <input class=\"form-control my-3\" *ngIf=\"isCVHeadEditing\" type=\"text\" placeholder=\"\"\n                [(ngModel)]=\"cvHeadLine\">\n              <div class=\"d-flex justify-content-start vertical-center\" *ngIf=\"isCVHeadEditing\">\n                <button class=\"btn btn-primary px-3 py-1 rounded-button mr-2\">Save</button>\n                <button class=\"btn btn-secondary px-3 py-1 rounded-button\">Cancel</button>\n              </div>\n              <hr>\n            </div>\n            <div class=\"p-3 mx-0 mb-3 bg-white w-100 border-8\" [formGroup]=\"profileForm\">\n              <div class=\"w-100\">\n                <div class=\"mb-3 d-flex justify-content-between\">\n                  <span class=\"text-black semi-bold myfont-size\">Personal Details </span>\n                </div>\n                <div class=\"p-3\" [ngClass]=\"isBasiDetailEditing ? 'border-violet box-shadow' : ''\"\n                  style=\"border-radius: 6px;\">\n                  <div class=\"row col-sm-12 pt-3 mx-auto d-flex justify-content-between\"\n                    [ngClass]=\"isBasiDetailEditing ? '' : 'not-clickable'\">\n                    <div class=\" col-sm-5 mb-2\">\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\n                        <mat-label class=\"p-0  text-grey\">Phone number</mat-label>\n                        <input matInput type=\"number\" placeholder=\"Enter phone number\" class=\"p-0\"\n                          formControlName='mobile' name=\"mobile\">\n                        <mat-error>Enter valid phone number</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5 mb-2\">\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\n                        <mat-label class=\"p-0  text-grey\">Gender</mat-label>\n                        <mat-select formControlName='gender'>\n                          <mat-option value=\"Female\">\n                            Female\n                          </mat-option>\n                          <mat-option value=\"Male\">\n                            Male\n                          </mat-option>\n                          <mat-option value=\"Others\">\n                            Others\n                          </mat-option>\n                        </mat-select>\n                        <mat-error>Enter valid detail</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5 mb-2\">\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\n                        <mat-label class=\"p-0  text-grey\">Martial Status</mat-label>\n                        <mat-select formControlName='martialStatus'>\n                          <mat-option value=\"Single\">\n                            Single\n                          </mat-option>\n                          <mat-option value=\"Married\">\n                            Married\n                          </mat-option>\n                          <mat-option value=\"Divorced\">\n                            Divorced\n                          </mat-option>\n                          <mat-option value=\"Widowed\">\n                            Widowed\n                          </mat-option>\n                          <mat-option value=\"Prefer not to say!\">\n                            Prefer not to say!\n                          </mat-option>\n                        </mat-select>\n                        <mat-error>Enter valid detail</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5 mb-2\">\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\n                        <mat-label class=\"p-0  text-grey\">Nationality</mat-label>\n                        <input matInput placeholder=\"Enter nationality\" class=\"p-0\" formControlName='nationality'>\n                        <mat-error>Enter valid detail</mat-error>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-sm-5 mb-2\">\n                      <mat-form-field class=\"p-0 w-100 mat-form-field\">\n                        <mat-label class=\"p-0  text-grey\">Date of Birth</mat-label>\n                        <input matInput readonly [matDatepicker]=\"picker1\" formControlName='dob' [max]=\"maxDob\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <mat-hint class=\"text-light-grey text-xs\">Click on icon to select date</mat-hint> -->\n                        <mat-error>Enter valid DOB</mat-error>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                  <div class=\"d-flex justify-content-end\" *ngIf=\"isBasiDetailEditing\">\n                    <button class=\"btn btn-primary bg-violet px-3 py-1\">Save</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\n              <div class=\"mt-2 w-100\">\n                <div class=\"ml-4 mb-3 d-flex justify-content-between\">\n                  <span class=\"text-black semi-bold myfont-size\">Skills </span>\n                </div>\n                <div class=\"row col-sm-11 d-flex justify-content-start\">\n                  <div class=\"col-sm-12 my-4\">\n                    <div *ngFor=\"let data of skillsArray; index as i\"\n                      class=\"px-3 py-2 text-primary bg-lightest-blue mr-1 border-6 text-lato text-sm vertical-center\"\n                      style=\"display: inline-block; border-radius: 15px; width: max-content; margin: 3px !important; white-space:nowrap;\">\n                      <span class=\"text-grey mr-3 text-violet\">{{data}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\n              <div class=\"mt-2 w-100\">\n                <div class=\"ml-4 mb-3 d-flex justify-content-between\">\n                  <span class=\"text-black semi-bold myfont-size\">Work Experience </span>\n                </div>\n                <div class=\"w-100\">\n                  <div class=\"bg-grey mx-auto w-100\">\n                    <div *ngFor=\"let data of workExpArray; index as i\" class=\"w-100 text-break p-4 bg-white box-shadow\"\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\n                      <span class=\"text-smd d-block py-0 my-0 text-dark mr-3\"><b>{{data.title}}</b></span>\n                      <div class=\"d-flex justify-content-start vertical-center\">\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">{{data.companyName}}\n                        </span>\n                        <span class=\"material-icons text-dark bold text-xxs mr-1\">stop_circle</span>\n                        <span class=\"text-sm text-dark mr-3 vertical-center\">\n                          {{data.type}}</span>\n                      </div>\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.startDate | date : 'MMMM\n                        yyyy'}} - {{data.isWorking === true ? 'Present' : data.endDate | date : 'MMMM\n                        yyyy'}}</span>\n                      <span class=\"text-sm d-block text-grey mr-3\">{{data.location}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\n              <div class=\"mt-2 w-100\">\n                <div class=\"ml-3 mb-3 d-flex justify-content-between\">\n                  <span class=\"text-black semi-bold myfont-size\">Education </span>\n                </div>\n                <div class=\"w-100\">\n                  <div class=\"bg-grey my-4 w-100\">\n                    <div *ngFor=\"let data of educationArray; index as i\"\n                      class=\"w-100 text-break p-4 bg-white box-shadow\"\n                      style=\"border-radius: 7px; margin-top: 10px !important; margin-bottom: 10px !important;\">\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Degree/Standard : </b>{{data.degree}}</span>\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>School : </b>{{data.school}}</span>\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Field: </b>{{data.field}}</span>\n                      <span class=\"text-sm d-block m-2 text-grey mr-3\"><b>Completion date : </b>{{data.completionDate\n                        |\n                        date\n                        :\n                        'dd\n                        MMMM\n                        yyyy'}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"p-2 bg-white mb-3 w-100 border-8\">\n              <div class=\"vertical-center justify-content-between\">\n                <span class=\"text-black semi-bold myfont-size vertical-center ml-3\">Resume <span\n                    class=\"material-icons-outlined bold text-dark text-ssmd ml-2\">attachment</span></span>\n                <span class=\"text-violet text-link text-sm\" *ngIf=\"user.resume\" (click)=\"openResume()\"><u>Open\n                    Resume</u></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<!-- </div> -->\n\n\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "Xsf5":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/nav-bar-content/nav-bar-content.component.ts ***!
      \********************************************************************************/

    /*! exports provided: NavBarContentComponent */

    /***/
    function Xsf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarContentComponent", function () {
        return NavBarContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_bar_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-bar-content.component.html */
      "Ia/W");
      /* harmony import */


      var _nav_bar_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-bar-content.component.scss */
      "caud");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavBarContentComponent = /*#__PURE__*/function () {
        function NavBarContentComponent(modalRef, modalService, router) {
          _classCallCheck(this, NavBarContentComponent);

          this.modalRef = modalRef;
          this.modalService = modalService;
          this.router = router;
          this.navItems = [];
          this.url = '';
          this.isCollapsed = true;
        }

        _createClass(NavBarContentComponent, [{
          key: "navigate",
          value: function navigate(url) {
            this.isCollapsed = true;
            this.router.navigateByUrl(url);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.url = this.router.url;
          }
        }, {
          key: "openModal",
          value: function openModal(template) {
            this.modalRef = this.modalService.show(template, {
              "class": 'half-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.modalRef.hide();
          }
        }, {
          key: "loggedOut",
          value: function loggedOut() {
            this.modalRef.hide();
            window.localStorage.removeItem('id');
            window.open("https://refer2career.com/login", "_self");
          }
        }]);

        return NavBarContentComponent;
      }();

      NavBarContentComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      NavBarContentComponent.propDecorators = {
        navItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }]
      };
      NavBarContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-nav-bar-content',
        template: _raw_loader_nav_bar_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavBarContentComponent);
      /***/
    },

    /***/
    "YYSD":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/view-profile/view-profile.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function YYSD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\n::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\n::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\n:root {\n  --progress-bar-width-my-profile: 0px;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\ninput::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n.myfont-size {\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3ZpZXctcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUF5RCw2QkFBNkI7QUFDdEY7O0FBQUE7RUFBMEMsV0FBVztFQUFFLGVBQWU7QUFLdEU7O0FBSEE7RUFDSSx5Q0FBd0M7QUFNNUM7O0FBSEU7RUFDRSx3QkFBd0I7QUFNNUI7O0FBSEU7RUFDRSxvQ0FBZ0M7QUFNcEM7O0FBSkU7RUFBZ0IseUNBQUE7RUFFZCxVQUFVO0VBQUUsWUFBQTtBQVFoQjs7QUFWRTtFQUFnQix5Q0FBQTtFQUVkLFVBQVU7RUFBRSxZQUFBO0FBUWhCOztBQUxFO0VBQ0Usc0JBQXNCO0FBUTFCOztBQUxFO0VBQ0Usc0JBQXNCO0FBUTFCOztBQUxFO0VBQ0UsZUFBZTtBQVFuQiIsImZpbGUiOiJ2aWV3LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuOWVtIDBweCAhaW1wb3J0YW50O31cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG59XG5cbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpyb290IHtcbiAgICAtLXByb2dyZXNzLWJhci13aWR0aC1teS1wcm9maWxlOiAwcHg7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgIC8vY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gIH1cblxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubXlmb250LXNpemV7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9Il19 */";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./log-in/log-in.component */
      "br8r");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);

      firebase__WEBPACK_IMPORTED_MODULE_13__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["firebaseConfig"]);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ctorParameters = function () {
        return [];
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_6__["LogInComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"]],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicRouteStrategy"]
        }],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "a9Oz":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/add-job-post/add-job-post.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function a9Oz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cdk-global-overlay-wrapper, .cdk-overlay-container {\n  z-index: 99999 !important;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  z-index: 99999 !important;\n}\n\n::ng-deep .cdk-global-overlay-wrapper, ::ng-deep .cdk-overlay-container {\n  z-index: 9999 !important;\n}\n\n.text-overflow {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n::ng-deep .mat-select-content {\n  width: 100%;\n}\n\nmat-slider {\n  width: 300px;\n}\n\nmat-slider ::ng-deep .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.9em 0px !important;\n}\n\nmat-slider ::ng-deep .mat-form-field-label-wrapper {\n  top: -1.3em;\n  font-size: 15px;\n}\n\nmat-slider ::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n}\n\nmat-slider ::ng-deep .cdk-overlay-container {\n  z-index: 1200 !important;\n}\n\nmat-slider :root {\n  --progress-bar-width-my-profile: 0px;\n}\n\nmat-slider ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\nmat-slider ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  opacity: 1;\n  /* Firefox */\n}\n\nmat-slider input::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\nmat-slider input:focus::-webkit-input-placeholder {\n  color: #888 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZC1qb2ItcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFzRCx5QkFBd0I7QUFFOUU7O0FBREE7RUFDSSx5QkFBeUI7QUFJN0I7O0FBREU7RUFBa0Usd0JBQXVCO0FBSzNGOztBQUhFO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFNdkI7O0FBSEU7RUFDRSxXQUFXO0FBTWY7O0FBSEU7RUFDRSxZQUFZO0FBTWhCOztBQVBFO0VBSXVELDZCQUE2QjtBQU90Rjs7QUFYRTtFQUt3QyxXQUFXO0VBQUUsZUFBZTtBQVd0RTs7QUFoQkU7RUFRRSx5Q0FBd0M7QUFZNUM7O0FBcEJFO0VBWUUsd0JBQXdCO0FBWTVCOztBQXhCRTtFQWdCRSxvQ0FBZ0M7QUFZcEM7O0FBNUJFO0VBa0JnQix5Q0FBQTtFQUVkLFVBQVU7RUFBRSxZQUFBO0FBY2hCOztBQWxDRTtFQWtCZ0IseUNBQUE7RUFFZCxVQUFVO0VBQUUsWUFBQTtBQWNoQjs7QUFsQ0U7RUF3QkUsc0JBQXNCO0FBYzFCOztBQXRDRTtFQTRCRSxzQkFBc0I7QUFjMUIiLCJmaWxlIjoiYWRkLWpvYi1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHsgei1pbmRleDogOTk5OTkhaW1wb3J0YW50OyB9IFxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHotaW5kZXg6IDk5OTk5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICA6Om5nLWRlZXAgeyAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsIC5jZGstb3ZlcmxheS1jb250YWluZXIgeyB6LWluZGV4OiA5OTk5IWltcG9ydGFudDsgfSB9XG5cbiAgLnRleHQtb3ZlcmZsb3d7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWNvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBtYXQtc2xpZGVyIHtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuOWVtIDBweCAhaW1wb3J0YW50O31cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7IHRvcDogLTEuM2VtOyBmb250LXNpemU6IDE1cHg7IH1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4xZW0pIHNjYWxlKC43NSk7XG59XG5cbiAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpyb290IHtcbiAgICAtLXByb2dyZXNzLWJhci13aWR0aC1teS1wcm9maWxlOiAwcHg7XG4gIH1cbiAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgIC8vY29sb3I6IHJnYigxNjAsIDE2MCwgMTYwKTtcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gIH1cblxuICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjODg4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "OPFr");
      /* harmony import */


      var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer.component.scss */
      "AYYD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ctorParameters = function () {
        return [];
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FooterComponent);
      /***/
    },

    /***/
    "br8r":
    /*!********************************************!*\
      !*** ./src/app/log-in/log-in.component.ts ***!
      \********************************************/

    /*! exports provided: LogInComponent */

    /***/
    function br8r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
        return LogInComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_log_in_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./log-in.component.html */
      "109v");
      /* harmony import */


      var _log_in_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./log-in.component.scss */
      "qWO0");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/models/enums */
      "pzb0");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var LogInComponent = /*#__PURE__*/function () {
        function LogInComponent(modalRef, authService, router, routing, toast, modalService, location) {
          _classCallCheck(this, LogInComponent);

          this.modalRef = modalRef;
          this.authService = authService;
          this.router = router;
          this.routing = routing;
          this.toast = toast;
          this.modalService = modalService;
          this.location = location;
          this.isEmployer = false;
          this.isSignUp = false;
          this.isLoginCard = true;
          this.otp = '';
          this.isOTPCorrect = true;
          this.isVerified = false;
          this.isForgotPassOTP = false;
          this.isResetPassword = false;
          this.isServiceRunning = false;
          this.role = src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"];
          this.isVerifyOTP = false;
          this.isLogin = true;
          this.isRegistration = false;
          this.isForgotPassword = false;
          this.isPasswordVisible = false;
          this.isConfirmPasswordVisible = false;
          this.password = '';
          this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]);
          this.resetPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(7)]);
          this.message = '';
          this.isPasswordReset = false;
          this.isScreenBig = false;
          this.socialUser = {};
        }

        _createClass(LogInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.routing.params.subscribe(function (params) {
              if (params.user) {
                _this21.isServiceRunning = true;
                _this21.socialUser = params.user;
                var db = {
                  collection: 'users',
                  query: {
                    providerId: _this21.socialUser
                  }
                };

                _this21.authService.find(db).subscribe(function (data) {
                  if (data.data) {
                    if (data.data.length > 0) {
                      window.localStorage.setItem('id', window.btoa(JSON.stringify(data.data[0])));
                      window.location.reload();
                      _this21.isServiceRunning = false;
                    }
                  } else {
                    _this21.toast.showToast('Something Went Wrong!', 'bg-danger');

                    setTimeout(function () {
                      window.open('https://refer2career.com/', '_self');
                    }, 3000);
                  }
                });
              }
            });

            if (window.screen.width > 1150) {
              this.isScreenBig = true;
            } else {
              this.isScreenBig = false;
            }

            this.initializeSignupForm();
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              emailLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
              passwordLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
            });
          }
        }, {
          key: "hideEmployerpahe",
          value: function hideEmployerpahe() {
            var _this22 = this;

            this.loginVisible();
            setTimeout(function () {
              _this22.isEmployer = false;
            }, 500);
          }
        }, {
          key: "resendOTP",
          value: function resendOTP() {
            var _this23 = this;

            this.isServiceRunning = true;
            this.authService.getOTP({
              email: this.signupForm.get('email').value ? this.signupForm.get('email').value : this.email.value
            }).subscribe(function (data) {
              if (data.data === true) {
                _this23.toast.showToast('Passcode Sent Successfully!');

                var counter = 30;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(function () {
                  return counter > 0;
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
                  return counter--;
                })).subscribe(function () {
                  _this23.timer = counter;
                });
                _this23.isServiceRunning = false;
              }
            });
          }
        }, {
          key: "isValidOTP",
          value: function isValidOTP() {
            return this.otp.length === 6;
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange($event) {
            this.otp = $event;
          }
        }, {
          key: "forgotPasswordVisible",
          value: function forgotPasswordVisible() {
            this.hideAll();
            this.isForgotPassword = true;
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.hideAll();
            this.isLogin = true;
          }
        }, {
          key: "goToSignUp",
          value: function goToSignUp() {
            this.hideAll();
            this.isSignUp = true;
          }
        }, {
          key: "registrationVisible",
          value: function registrationVisible() {
            var _this24 = this;

            setTimeout(function () {
              _this24.hideAll();

              _this24.initializeSignupForm();

              _this24.isRegistration = true;
            }, 300);
          }
        }, {
          key: "loginVisible",
          value: function loginVisible() {
            var _this25 = this;

            setTimeout(function () {
              _this25.hideAll();

              _this25.isLogin = true;
              _this25.isLoginCard = true;
            }, 300);
          }
        }, {
          key: "showLogin",
          value: function showLogin() {
            this.hideAll();
            this.isForgotPassword = false;
            this.isLogin = true;
            this.isLoginCard = false;
          }
        }, {
          key: "hideAll",
          value: function hideAll() {
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
        }, {
          key: "initializeSignupForm",
          value: function initializeSignupForm() {
            this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)])
            });
          }
        }, {
          key: "registerCandidate",
          value: function registerCandidate() {
            var _this26 = this;

            this.signupForm.markAllAsTouched();

            if (this.signupForm.valid) {
              this.isServiceRunning = true;
              var candidate = {
                user: {
                  cId: new Date().getTime(),
                  name: this.signupForm.get('name').value,
                  email: this.signupForm.get('email').value.toLowerCase(),
                  password: this.signupForm.get('password').value,
                  role: src_app_shared_models_enums__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CANDIDATE,
                  verified: false,
                  time: new Date()
                }
              };
              this.authService.registerCandidate(candidate).subscribe(function (data) {
                if (data.error) {
                  _this26.message = data.error;
                } else {
                  _this26.hideAll();

                  _this26.isVerifyOTP = true;
                  var counter = 30;
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(function () {
                    return counter > 0;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
                    return counter--;
                  })).subscribe(function () {
                    _this26.timer = counter;
                  });
                }

                _this26.isServiceRunning = false;
              });
            } else {
              if (!this.signupForm.get('email').valid) {
                this.toast.showToast('Enter valid email!', 'bg-danger');
              } else if (!this.signupForm.get('name').valid) {
                this.toast.showToast('Enter name!', 'bg-danger');
              } else if (!this.signupForm.get('password').valid) {
                this.toast.showToast('Password atleast contain 6 characters!', 'bg-danger');
              }
            }
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this27 = this;

            this.isServiceRunning = true;

            if (this.isForgotPassOTP) {
              var data = {
                email: this.email.value,
                otp: this.otp
              };
              this.authService.verify(data).subscribe(function (res) {
                if (res.data === true) {
                  _this27.isVerified = true;

                  _this27.hideAll();

                  _this27.isResetPassword = true;
                } else {
                  _this27.isOTPCorrect = false;
                }

                _this27.isServiceRunning = false;
              });
            } else {
              var _data = {
                email: this.signupForm.get('email').value,
                otp: this.otp
              };
              this.authService.verifyOTP(_data).then(function (res) {
                if (res.data === true) {
                  _this27.isVerified = true;

                  _this27.hideAll();

                  _this27.isLogin = true;
                } else {
                  _this27.isOTPCorrect = false;
                }

                _this27.isServiceRunning = false;
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            this.hideAll();
            this.isLogin = true;
          }
        }, {
          key: "login",
          value: function login() {
            var _this28 = this;

            if (this.loginForm.valid) {
              this.isServiceRunning = true;
              this.authService.login({
                email: this.loginForm.get('emailLogin').value.toLowerCase(),
                password: this.loginForm.get('passwordLogin').value
              }).then(function (data) {
                if (data.error) {
                  _this28.message = 'Invalid email or password!';
                } else if (data.email) {
                  _this28.modalRef.hide();

                  window.location.reload();
                  window.localStorage.setItem('id', window.btoa(JSON.stringify(data)));
                } else {
                  _this28.message = 'User not found!';
                }

                _this28.isServiceRunning = false;
              });
            }
          }
        }, {
          key: "linkedinLogin",
          value: function linkedinLogin() {
            window.open('https://refer2career.com/linkedin', '_self'); // this.authService.linkedInLogin().subscribe(data => {
            // });
          }
        }, {
          key: "googleLogin",
          value: function googleLogin() {
            window.open('https://refer2career.com/google', '_self'); // this.authService.linkedInLogin().subscribe(data => {
            // });
          }
        }, {
          key: "facebookLogin",
          value: function facebookLogin() {
            window.open('https://instajobapp.herokuapp.com/facebook', '_self'); // this.authService.linkedInLogin().subscribe(data => {
            // });
          }
        }, {
          key: "forgotPassword",
          value: function forgotPassword() {
            var _this29 = this;

            if (this.email.valid) {
              this.isServiceRunning = true;
              this.authService.getOTP({
                email: this.email.value
              }).subscribe(function (data) {
                if (data.data === true) {
                  _this29.hideAll();

                  _this29.isVerifyOTP = true;
                  var counter = 30;
                  Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(1000, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeWhile"])(function () {
                    return counter > 0;
                  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["tap"])(function () {
                    return counter--;
                  })).subscribe(function () {
                    _this29.timer = counter;
                  });
                  _this29.isForgotPassOTP = true;
                }

                _this29.isServiceRunning = false;
              });
            } else {
              this.toast.showToast('Enter valid email', 'bg-danger');
            }
          }
        }, {
          key: "restPassword",
          value: function restPassword() {
            var _this30 = this;

            this.resetPassword.markAsTouched();

            if (this.resetPassword.value) {
              var dbopeartion = {
                collection: 'users',
                data: {
                  password: this.resetPassword.value
                },
                query: {
                  email: this.email.value
                }
              };
              this.authService.update(dbopeartion).then(function (data) {
                if (data.data === true) {
                  _this30.hideAll();

                  _this30.toast.showToast('Password Reseted!');

                  _this30.isLogin = true;
                  _this30.isServiceRunning = false;
                }
              });
            }
          }
        }, {
          key: "navigate",
          value: function navigate() {}
        }]);

        return LogInComponent;
      }();

      LogInComponent.ctorParameters = function () {
        return [{
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalRef"]
        }, {
          type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]
        }];
      };

      LogInComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-log-in',
        template: _raw_loader_log_in_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_log_in_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LogInComponent);
      /***/
    },

    /***/
    "caud":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/nav-bar-content/nav-bar-content.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function caud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo-header {\n  height: auto;\n  width: auto;\n  max-width: 180px !important;\n}\n\n.active-button:hover {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.active-url {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.conatiner {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25hdi1iYXItY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0VBQ0kseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDSSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoibmF2LWJhci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taGVhZGVye1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmUtYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTIwNDM7IFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmFjdGl2ZS11cmx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBFMjA0MzsgXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyBcbn1cblxuLmNvbmF0aW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */";
      /***/
    },

    /***/
    "eDag":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/spinner-component/spinner-component.component.ts ***!
      \************************************************************************************/

    /*! exports provided: SpinnerComponentComponent */

    /***/
    function eDag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponentComponent", function () {
        return SpinnerComponentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_component_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner-component.component.html */
      "F8kL");
      /* harmony import */


      var _spinner_component_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner-component.component.scss */
      "WhTW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerComponentComponent = /*#__PURE__*/function () {
        function SpinnerComponentComponent() {
          _classCallCheck(this, SpinnerComponentComponent);

          this.visibility = true;
          this.color = 'accent';
        }

        _createClass(SpinnerComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponentComponent;
      }();

      SpinnerComponentComponent.ctorParameters = function () {
        return [];
      };

      SpinnerComponentComponent.propDecorators = {
        visibility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SpinnerComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spinner-component',
        template: _raw_loader_spinner_component_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_component_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SpinnerComponentComponent);
      /***/
    },

    /***/
    "eqfQ":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/all-job-posts/all-job-posts.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function eqfQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sort-by-selected {\n  border: 1px solid #4b4b4b;\n  color: white;\n  background-color: #0E2043;\n}\n\n.sort-by-not-selected {\n  border: 1px solid #4b4b4b;\n  color: #0E2043;\n  background-color: #E1E7FF;\n}\n\n::ng-deep .mat-step-header .mat-step-icon-selected, .mat-step-header .mat-step-icon-state-done, .mat-step-header .mat-step-icon-state-edit {\n  background-color: red !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: red !important;\n  opacity: 0.8 !important;\n}\n\n::ng-deep .mat-input-element {\n  caret-color: white !important;\n}\n\n::ng-deep .mat-form-field-invalid .mat-input-element, .mat-warn .mat-input-element {\n  caret-color: red !important;\n}\n\n::ng-deep .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\n  color: white !important;\n}\n\n::ng-deep .mat-form-field .mat-form-field-invalid .mat-form-field-label {\n  color: white !important;\n}\n\n::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #a0a0a0;\n  opacity: 1;\n  /* Firefox */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FsbC1qb2ItcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0ksZ0NBQStCO0FBQ25DOztBQUdBO0VBQ0ksdUJBQW1DO0FBQXZDOztBQUtBO0VBQ0ksdUJBQW1DO0FBRnZDOztBQU1BO0VBQ0kscUJBQW9CO0VBQ3BCLHVCQUFzQjtBQUgxQjs7QUFPQTtFQUNJLDZCQUF5QztBQUo3Qzs7QUFRQTtFQUNJLDJCQUEwQjtBQUw5Qjs7QUFTQTtFQUNJLDBDQUF5QztBQU43Qzs7QUFXQTtFQUNJLHVCQUFtQztBQVJ2Qzs7QUFZQTtFQUNJLHVCQUFtQztBQVR2Qzs7QUFZQTtFQUFnQix5Q0FBQTtFQUNaLGNBQXlCO0VBQ3pCLFVBQVU7RUFBRSxZQUFBO0FBUGhCOztBQUtBO0VBQWdCLHlDQUFBO0VBQ1osY0FBeUI7RUFDekIsVUFBVTtFQUFFLFlBQUE7QUFQaEIiLCJmaWxlIjoiYWxsLWpvYi1wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3J0LWJ5LXNlbGVjdGVke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTIwNDM7XG59XG5cbi5zb3J0LWJ5LW5vdC1zZWxlY3RlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgIGNvbG9yOiAjMEUyMDQzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUU3RkY7XG59XG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkIWltcG9ydGFudDtcbn1cblxuLy9pbnB1dCBvdXRsaW5lIGNvbG9yXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSFpbXBvcnRhbnQ7XG4gICAgLy8gb3BhY2l0eTogMSFpbXBvcnRhbnQ7XG59XG5cbi8vbWF0LWlucHV0IGZvY3VzZWQgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWlucHV0IGVycm9yIG91dGxpbmUgY29sb3Jcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGlja3tcbiAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjghaW1wb3J0YW50O1xufVxuXG4vLyBtYXQtaW5wdXQgY2FyZW50IGNvbG9yXG46Om5nLWRlZXAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWlucHV0IGVycm9yIGNhcmVudCBjb2xvclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCwgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IHJlZCFpbXBvcnRhbnQ7XG59XG5cbi8vIG1hdC1sYWJlbCBub3JtYWwgc3RhdGUgc3R5bGVcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikhaW1wb3J0YW50O1xuICAgIC8vIGNvbG9yOiAkbWFpbkNvbG9yIWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWxhYmVsIGZvY3VzZWQgc3R5bGVcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpIWltcG9ydGFudDtcbn1cblxuLy8gbWF0LWxhYmVsIGVycm9yIHN0eWxlXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSFpbXBvcnRhbnQ7XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgfVxuXG4vLyAgIC5qb2ItY2FyZCAge1xuLy8gICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBlMjA0Mztcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuLy8gICB9Il19 */";
      /***/
    },

    /***/
    "fJ1W":
    /*!*************************************************!*\
      !*** ./src/app/shared/auth-guard/auth-guard.ts ***!
      \*************************************************/

    /*! exports provided: RouteGuard */

    /***/
    function fJ1W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouteGuard", function () {
        return RouteGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RouteGuard = /*#__PURE__*/function () {
        function RouteGuard(router) {
          _classCallCheck(this, RouteGuard);

          this.router = router;
        }

        _createClass(RouteGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var role = route.data.role;
            {
              var id = window.localStorage.getItem("id");
              var user;

              if (id) {
                user = JSON.parse(window.atob(id));
              }

              if (user != null && user != undefined) {
                if (user.role == 0 || user.role == 1 || user.role == 2) {
                  return true;
                }

                if (user.role === 0) {
                  this.router.navigateByUrl('/admin');
                } else if (user.role === 1) {
                  this.router.navigateByUrl('/recruiter');
                } else if (user.role === 2) {
                  this.router.navigateByUrl('/referer');
                }

                return false;
              }

              this.router.navigateByUrl('/login');
              return false;
            }
          }
        }]);

        return RouteGuard;
      }();

      RouteGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      RouteGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RouteGuard);
      /***/
    },

    /***/
    "hLKV":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/job-post-service.service.ts ***!
      \*************************************************************/

    /*! exports provided: JobPostServiceService */

    /***/
    function hLKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobPostServiceService", function () {
        return JobPostServiceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var JobPostServiceService = /*#__PURE__*/function () {
        function JobPostServiceService(http) {
          _classCallCheck(this, JobPostServiceService);

          this.http = http;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'content-type': 'application/json'
          });
          this.baseUrl = '';
          this.post = undefined;
          this.jobPosts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.postDetail = {};
          this.myApplications = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.baseUrl = window.location.host.includes('localhost') ? 'http://localhost:8084' : '';
          this.getPosts();
        }

        _createClass(JobPostServiceService, [{
          key: "getMyApplications",
          value: function getMyApplications() {
            var _this31 = this;

            this.appliedJobPost({
              candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id
            }).subscribe(function (data) {
              if (data.data) {
                _this31.myApplications.next(data.data);
              }
            });
          }
        }, {
          key: "getPosts",
          value: function getPosts() {
            var _this32 = this;

            if (window.localStorage.getItem('id')) {
              if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === 1) {
                this.getJobPostsByEmployer({
                  _id: JSON.parse(window.atob(window.localStorage.getItem('id')))._id
                }).subscribe(function (data) {
                  _this32.jobPosts.next(data.data);
                });
              } else {
                this.getAllJobPosts().subscribe(function (data) {
                  _this32.jobPosts.next(data.data);
                });
              }
            }
          }
        }, {
          key: "addJobPost",
          value: function addJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/add/jobpost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "updateJobPost",
          value: function updateJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/update/jobpost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "deleteJobPost",
          value: function deleteJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/delete/jobpost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "getAllJobPosts",
          value: function getAllJobPosts() {
            return this.http.post(this.baseUrl + "/api/getAll/jobposts", {
              headers: this.headers
            });
          }
        }, {
          key: "getJobPost",
          value: function getJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/get/jobpost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "applyJobPost",
          value: function applyJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/apply/jobpost", body, {
              headers: this.headers
            });
          }
        }, {
          key: "appliedJobPost",
          value: function appliedJobPost(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/applied/jobposts", body, {
              headers: this.headers
            });
          }
        }, {
          key: "getJobPostsByEmployer",
          value: function getJobPostsByEmployer(data) {
            var body = JSON.stringify(data);
            return this.http.post(this.baseUrl + "/api/employer/jobposts", body, {
              headers: this.headers
            });
          }
        }]);

        return JobPostServiceService;
      }();

      JobPostServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      JobPostServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], JobPostServiceService);
      /***/
    },

    /***/
    "iwS4":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/applications/applications.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ApplicationsComponent */

    /***/
    function iwS4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
        return ApplicationsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./applications.component.html */
      "UV+q");
      /* harmony import */


      var _applications_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./applications.component.scss */
      "5sq2");
      /* harmony import */


      var _models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../models/enums */
      "pzb0");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./../../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../all-job-posts/all-job-posts.component */
      "Fg4b");

      var ApplicationsComponent = /*#__PURE__*/function () {
        function ApplicationsComponent(route, router, dbService, modalController, modalService, toast) {
          _classCallCheck(this, ApplicationsComponent);

          this.route = route;
          this.router = router;
          this.dbService = dbService;
          this.modalController = modalController;
          this.modalService = modalService;
          this.toast = toast;
          this.allCandidates = [];
          this.filteredCandidates = [];
          this.isAllChecked = false;
          this.totalChecked = 0;
          this.navItems = [{
            name: 'DASHBOARD',
            route: '/recruiter/dashboard'
          }, {
            name: 'MY PROFILE',
            route: '/recruiter/profile'
          }, {
            name: 'JOB POSTS',
            route: '/recruiter/job-posts'
          }, {
            name: 'MANAGE APPLICANTS',
            route: '/recruiter/applicants'
          }, {
            name: 'ADD JOB POST',
            route: '/recruiter/create-job-posts'
          }];
          this.isServiceRunning = false;
          this.skillName = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          this.postId = '';
          this.post = {};
          this.candidatesArray = [];
          this.allAplications = [];
          this.aplications = [];
          this.filterTemplate = {};
          this.skillsOptions = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS', 'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
          this.skillsArray = []; // logic for top nav bar

          this.isApplicationRecieved = true;
          this.isShortlisted = false;
          this.isHired = false;
          this.isRejected = false;
          this.totalHired = 0;
          this.totalShortlisted = 0;
          this.totalRejected = 0;
          this.applicationRecieved = 0;
          this.confirmModalStatus = 'Shortlisted';
          this.allReferedProfiles = [];
        }

        _createClass(ApplicationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this33 = this;

            this.route.params.subscribe(function (params) {
              if (params.jobId) {
                _this33.postId = params.jobId;

                _this33.getDetails();

                _this33.allCandidates = [];

                _this33.getApplicants();

                _this33.getReferedProfiles();
              }
            });
            this.filteredSkills = this.skillName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
              return _this33._filterSkills(value);
            }));
          }
        }, {
          key: "_filterSkills",
          value: function _filterSkills(value) {
            var filterValue = value.toLowerCase();
            return this.skillsOptions.filter(function (option) {
              return option.toLowerCase().indexOf(filterValue) === 0;
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalRef.hide();
          }
        }, {
          key: "getApplicants",
          value: function getApplicants() {
            var _this34 = this;

            this.allCandidates = [];
            this.filteredCandidates = [];
            this.isServiceRunning = true;
            var db = {
              collection: 'applyJob',
              query: {
                jobPostId: this.postId
              }
            };
            this.dbService.find(db).subscribe(function (candidates) {
              _this34.isServiceRunning = false;

              if (candidates.data.length > 0) {
                candidates.data.forEach(function (cand, index) {
                  _this34.isServiceRunning = true;
                  var dbOperation = {
                    collection: 'users',
                    query: {
                      _id: cand.candidateId
                    },
                    selectedFields: {
                      name: 1,
                      resume: 1,
                      _id: 1,
                      profileCompleted: 1,
                      email: 1
                    }
                  };

                  _this34.dbService.find(dbOperation).subscribe(function (a) {
                    if (a.data.length > 0) {
                      a = a.data[0];
                      var user = {
                        applyId: cand._id,
                        _id: a._id,
                        name: a.name,
                        resume: a.resume,
                        email: a.email,
                        status: cand.status ? cand.status : null,
                        statusArray: cand.statusArray ? cand.statusArray : [],
                        isChecked: false,
                        profileCompleted: a.profileCompleted ? a.profileCompleted : 20
                      };

                      if (!_this34.allCandidates.find(function (data) {
                        return data._id === user._id;
                      })) {
                        _this34.allCandidates.push(user);
                      }

                      _this34.changeTopMenu(0);

                      _this34.calculateApplocants();

                      _this34.isServiceRunning = false;
                    }
                  });
                });
              }
            });
          }
        }, {
          key: "getDetails",
          value: function getDetails() {
            var _this35 = this;

            this.isServiceRunning = true;
            var operation = {
              collection: 'jobposts',
              query: {
                _id: this.postId
              }
            };
            this.dbService.find(operation).subscribe(function (data) {
              _this35.isServiceRunning = false;

              if (data.data.length > 0) {
                _this35.isServiceRunning = true;
                _this35.post = data.data[0];
              }
            });
          }
        }, {
          key: "getReferedProfiles",
          value: function getReferedProfiles() {
            var _this36 = this;

            this.isServiceRunning = true;
            var operation = {
              collection: 'referedProfiles',
              query: {
                jobId: this.postId
              }
            };
            this.dbService.find(operation).subscribe(function (candidates) {
              _this36.isServiceRunning = false;

              if (candidates.data.length > 0) {
                candidates.data.forEach(function (cand, index) {
                  _this36.isServiceRunning = true;
                  var dbOperation = {
                    collection: 'users',
                    query: {
                      email: cand.email,
                      role: 2
                    },
                    selectedFields: {
                      name: 1,
                      resume: 1,
                      _id: 1,
                      profileCompleted: 1,
                      email: 1
                    }
                  };

                  _this36.dbService.find(dbOperation).subscribe(function (a) {
                    if (a.data.length > 0) {
                      a = a.data[0];
                      var user = {
                        applyId: cand._id,
                        refered: true,
                        _id: a._id,
                        name: cand.name,
                        resume: cand.resume,
                        email: a.email,
                        status: cand.status ? cand.status : null,
                        statusArray: cand.statusArray ? cand.statusArray : [],
                        isChecked: false,
                        profileCompleted: a.profileCompleted ? a.profileCompleted : 20
                      };

                      if (!_this36.allCandidates.find(function (data) {
                        return data.applyId === user.applyId;
                      })) {
                        _this36.allCandidates.push(user);
                      }

                      _this36.changeTopMenu(0);

                      _this36.calculateApplocants();
                    } else {
                      var _user = {
                        applyId: cand._id,
                        _id: cand._id,
                        name: cand.name,
                        refered: true,
                        resume: cand.resume,
                        email: cand.email,
                        status: cand.status ? cand.status : null,
                        statusArray: cand.statusArray ? cand.statusArray : [],
                        isChecked: false,
                        profileCompleted: cand.profileCompleted ? a.profileCompleted : 20
                      };

                      if (!_this36.allCandidates.find(function (data) {
                        return data.applyId === _user.applyId;
                      })) {
                        _this36.allCandidates.push(_user);
                      }

                      _this36.changeTopMenu(0);

                      _this36.calculateApplocants();
                    }

                    _this36.isServiceRunning = false;
                  });
                });
              }
            });
          }
        }, {
          key: "openResume",
          value: function openResume(resume) {
            window.open(resume);
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _all_job_posts_all_job_posts_component__WEBPACK_IMPORTED_MODULE_12__["AllJobPostsComponent"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "calculateTotalExp",
          value: function calculateTotalExp(post) {
            var dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
            var dateSecond = new Date(post.startDate); // time difference

            var timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime()); // days difference

            var diffYears = timeDiff / (1000 * 3600 * 24 * 365);
            return diffYears.toFixed(0) + ' Years';
          }
        }, {
          key: "seeResume",
          value: function seeResume(resume, id, profileViews) {
            var db = {
              collection: 'users',
              data: {
                profileViews: profileViews ? profileViews + 1 : 1
              },
              query: {
                _id: id
              }
            };
            this.dbService.update(db).then(function (data) {
              if (data.data) {
                window.open(resume);
              }
            });
          }
        }, {
          key: "openFilter",
          value: function openFilter(template) {
            this.filterTemplate = template;
            this.modalRef = this.modalService.show(template, {
              "class": 'filter-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "seeResults",
          value: function seeResults() {
            var _this37 = this;

            this.isServiceRunning = true;
            this.candidatesArray.forEach(function (cand, index) {
              var dbOperation = {
                collection: 'users',
                query: {
                  _id: cand.candidateId,
                  totalWorkExp: {
                    $gt: _this37.minExp ? _this37.minExp - 1 : 0
                  }
                }
              };
              _this37.allAplications = [];
              _this37.aplications = [];

              _this37.dbService.find(dbOperation).subscribe(function (user) {
                _this37.isServiceRunning = false;

                if (user.data.length > 0) {
                  var candidate = user.data[0];

                  if (_this37.skillsArray.length > 0) {
                    _this37.skillsArray.forEach(function (skill) {
                      if (candidate.skills.find(function (data) {
                        return data.includes(skill);
                      })) {
                        var localCandidate = user.data[0];
                        localCandidate.appliedOn = cand.date;
                        localCandidate.appliedId = cand._id;
                        localCandidate.status = cand.status ? cand.status : null;

                        _this37.aplications.push(localCandidate);

                        _this37.allAplications.push(localCandidate);
                      }
                    });
                  } else {
                    candidate.appliedOn = candidate.date;

                    _this37.allAplications.push(candidate);

                    _this37.aplications.push(candidate);
                  }
                }
              });

              if (index + 1 === _this37.candidatesArray.length) {
                _this37.closeModal();
              }
            });
          }
        }, {
          key: "openSkillModal",
          value: function openSkillModal(template) {
            this.modalRef.hide();
            this.skillName.reset();
            this.modalRef = this.modalService.show(template, {
              id: 1,
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "addSkill",
          value: function addSkill() {
            this.skillName.markAsTouched();

            if (this.skillName.value) {
              this.skillsArray.push(this.skillName.value);
              this.modalRef.hide();
              this.openFilter(this.filterTemplate);
            }
          }
        }, {
          key: "removeTag",
          value: function removeTag(index) {
            this.skillsArray.splice(index, 1);
          }
        }, {
          key: "removeFromFilter",
          value: function removeFromFilter(index) {
            this.skillsArray.splice(index, 1);
            this.seeResults();
          }
        }, {
          key: "removeExp",
          value: function removeExp() {
            this.minExp = null;
            this.seeResults();
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.skillsArray = [];
            this.minExp = null;
            this.getDetails();
          }
        }, {
          key: "removeChecked",
          value: function removeChecked() {
            this.allCandidates.map(function (data) {
              data.isChecked = false;
            });
          }
        }, {
          key: "changeTopMenu",
          value: function changeTopMenu(id) {
            this.isApplicationRecieved = false;
            this.isShortlisted = false;
            this.isHired = false;
            this.isRejected = false;

            switch (id) {
              case 0:
                {
                  this.isApplicationRecieved = true;
                  this.filterApplicants(null);
                  this.totalChecked = 0;
                  this.removeChecked();
                  break;
                }

              case 1:
                {
                  this.isShortlisted = true;
                  this.filterApplicants('Shortlisted');
                  this.totalChecked = 0;
                  this.removeChecked();
                  break;
                }

              case 2:
                {
                  this.isHired = true;
                  this.filterApplicants('Hired');
                  this.totalChecked = 0;
                  this.removeChecked();
                  break;
                }

              case 3:
                {
                  this.isRejected = true;
                  this.filterApplicants('Rejected');
                  this.totalChecked = 0;
                  this.removeChecked();
                  break;
                }
            }
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(status) {
            var _this38 = this;

            this.isServiceRunning = true;
            this.modalRef.hide();
            this.filteredCandidates.forEach(function (user, index) {
              if (user.isChecked === true) {
                user.statusArray.push({
                  name: status,
                  date: new Date()
                });
                var db = {
                  collection: user.refered === true ? 'referedProfiles' : 'applyJob',
                  data: {
                    status: status,
                    statusArray: user.statusArray
                  },
                  query: {
                    _id: user.applyId
                  }
                };

                _this38.dbService.update(db).then(function (data) {
                  if (data.data === true) {
                    user.isChecked = false;
                    _this38.isServiceRunning = false;
                  } else {
                    _this38.toast.showToast('Something went wrong!', 'bg-danger');
                  }
                });
              }

              if (index === _this38.filteredCandidates.length - 1) {
                _this38.isServiceRunning = false;

                _this38.toast.showToast("".concat(status, " Successfully!"));

                _this38.getApplicants();

                _this38.getReferedProfiles();
              }
            });
          }
        }, {
          key: "openConfirmModal",
          value: function openConfirmModal(template, status) {
            this.confirmModalStatus = status;
            this.modalRef = this.modalService.show(template, {
              animated: true
            });
          }
        }, {
          key: "checkAll",
          value: function checkAll() {
            var _this39 = this;

            this.isAllChecked = !this.isAllChecked;

            if (this.isAllChecked) {
              this.totalChecked = this.filteredCandidates.length;
            } else {
              this.totalChecked = 0;
            }

            this.filteredCandidates.map(function (cand) {
              cand.isChecked = _this39.isAllChecked;
            });
          }
        }, {
          key: "checkedUser",
          value: function checkedUser(index) {
            this.filteredCandidates[index].isChecked = !this.filteredCandidates[index].isChecked;

            if (this.filteredCandidates[index].isChecked) {
              this.totalChecked++;

              if (this.totalChecked === this.filteredCandidates.length) {
                this.isAllChecked = true;
              }
            } else {
              this.totalChecked--;
              this.isAllChecked = false;
            }
          }
        }, {
          key: "filterApplicants",
          value: function filterApplicants(status) {
            this.filteredCandidates = [];
            this.filteredCandidates = this.allCandidates.filter(function (data) {
              return data.status === status;
            });
            this.filteredCandidates.sort(function (a, b) {
              return b.profileCompleted - a.profileCompleted;
            });
          }
        }, {
          key: "viewProfile",
          value: function viewProfile(id) {
            if (JSON.parse(window.atob(window.localStorage.getItem('id'))).role === _models_enums__WEBPACK_IMPORTED_MODULE_3__["UserRole"].ADMIN) {
              this.router.navigateByUrl("/admin/applicants/profile/".concat(id));
            } else {
              this.router.navigateByUrl("/recruiter/applicants/profile/".concat(id));
            }
          }
        }, {
          key: "calculateApplocants",
          value: function calculateApplocants() {
            this.applicationRecieved = this.allCandidates.filter(function (data) {
              return data.status === null;
            }).length;
            this.totalShortlisted = this.allCandidates.filter(function (data) {
              return data.status === 'Shortlisted';
            }).length;
            this.totalHired = this.allCandidates.filter(function (data) {
              return data.status === 'Hired';
            }).length;
            this.totalRejected = this.allCandidates.filter(function (data) {
              return data.status === 'Rejected';
            }).length;
          }
        }]);

        return ApplicationsComponent;
      }();

      ApplicationsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
        }];
      };

      ApplicationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
        selector: 'app-applications',
        template: _raw_loader_applications_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_applications_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ApplicationsComponent);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "pzb0":
    /*!****************************************!*\
      !*** ./src/app/shared/models/enums.ts ***!
      \****************************************/

    /*! exports provided: UserRole, JobType, salaryType, Status */

    /***/
    function pzb0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRole", function () {
        return UserRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobType", function () {
        return JobType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salaryType", function () {
        return salaryType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Status", function () {
        return Status;
      });

      var UserRole;

      (function (UserRole) {
        UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
        UserRole[UserRole["EMPLOYER"] = 1] = "EMPLOYER";
        UserRole[UserRole["CANDIDATE"] = 2] = "CANDIDATE";
      })(UserRole || (UserRole = {}));

      var JobType;

      (function (JobType) {
        JobType[JobType["Job"] = 0] = "Job";
        JobType[JobType["Internship"] = 1] = "Internship";
      })(JobType || (JobType = {}));

      var salaryType;

      (function (salaryType) {
        salaryType[salaryType["Weekly"] = 0] = "Weekly";
        salaryType[salaryType["Monthly"] = 1] = "Monthly";
        salaryType[salaryType["Yearly"] = 2] = "Yearly";
      })(salaryType || (salaryType = {}));

      var Status;

      (function (Status) {
        Status[Status["Submitted"] = 0] = "Submitted";
        Status[Status["Shortlisted"] = 1] = "Shortlisted";
        Status[Status["Selected"] = 2] = "Selected";
        Status[Status["Hired"] = 3] = "Hired";
        Status[Status["Rejected"] = 4] = "Rejected";
        Status[Status["Terminated"] = 5] = "Terminated";
      })(Status || (Status = {}));
      /***/

    },

    /***/
    "qWO0":
    /*!**********************************************!*\
      !*** ./src/app/log-in/log-in.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function qWO0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-family: 'Lato', sans-serif;\n}\n\n.active-button:hover {\n  background-color: #0E2043;\n  color: white !important;\n  border-radius: 6px;\n}\n\n.logo-header {\n  height: auto;\n  width: auto;\n  max-width: 170px !important;\n}\n\n.linked-in-color {\n  color: #0077b7 !important;\n}\n\n.facebook-color {\n  color: #3d548e !important;\n}\n\n.site-button.button-lg {\n  font-size: 14px;\n  font-weight: 700;\n  padding: 14px 30px;\n  text-transform: uppercase;\n}\n\n.p-a30 {\n  padding: 30px;\n}\n\n.border-1 {\n  border-color: #dfdfdf;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.h4 {\n  font-size: 24px;\n  line-height: 28px;\n  margin-bottom: 15px;\n}\n\n.h3 {\n  font-size: 28px;\n  line-height: 35px;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n\n.p {\n  line-height: 24px;\n  margin-bottom: 24px;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.label {\n  font-family: 'Lato', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: #6f6f6f;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.site-button {\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  vertical-align: middle;\n}\n\n.site-button.circle {\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border-radius: 40px;\n  line-height: 39px;\n  background: #fff;\n}\n\n.site-button.outline-2 {\n  border-width: 2px;\n}\n\n.site-button.outline {\n  background: none;\n  border-style: solid;\n  border-color: inherit;\n}\n\n.form-control {\n  background: #f9faff none repeat scroll 0 0;\n  border: 0 none;\n  font-size: 16px;\n  height: 50px;\n  padding: 0 20px;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.a {\n  transition: all 0.2s linear;\n  outline: 0 none;\n  text-decoration: none;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.myfont-size {\n  font-size: 15px;\n  font-weight: 600;\n  font-family: 'Lato', sans-serif;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZy1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0VBQ1EsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUFDdkI7O0FBRUE7RUFDSSxjQUFjO0FBQ2xCOztBQUVBO0VBQ0ksMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixxQkFBcUI7QUFDekI7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsV0FBVztBQUNmIiwiZmlsZSI6ImxvZy1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5hY3RpdmUtYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRTIwNDM7IFxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxvZ28taGVhZGVye1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDE3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saW5rZWQtaW4tY29sb3J7XG4gICAgY29sb3I6ICMwMDc3YjcgIWltcG9ydGFudDtcbn1cblxuLmZhY2Vib29rLWNvbG9ye1xuICBjb2xvcjogIzNkNTQ4ZSAhaW1wb3J0YW50O1xufVxuXG4uc2l0ZS1idXR0b24uYnV0dG9uLWxnIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnAtYTMwIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uYm9yZGVyLTF7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGZkZmRmO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5oNHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmgze1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5we1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5saXN0LWlubGluZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzZmNmY2ZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zaXRlLWJ1dHRvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaXRlLWJ1dHRvbi5jaXJjbGUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM5cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnNpdGUtYnV0dG9uLm91dGxpbmUtMiB7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG5cbi5zaXRlLWJ1dHRvbi5vdXRsaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgICAgICBib3JkZXI6IDAgbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnRhYi1jb250ZW50Pi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgb3V0bGluZTogMCBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubXlmb250LXNpemV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzAwMDs7XG59Il19 */";
      /***/
    },

    /***/
    "shd7":
    /*!*************************************************************************************!*\
      !*** ./src/app/shared/components/add-job-post/job-details/job-details.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: JobDetailsComponent */

    /***/
    function shd7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function () {
        return JobDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_job_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./job-details.component.html */
      "+WbM");
      /* harmony import */


      var _job_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./job-details.component.scss */
      "A/e3");
      /* harmony import */


      var _add_job_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../add-job-post.component */
      "8ymR");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      "3WbM");

      var JobDetailsComponent = /*#__PURE__*/function () {
        function JobDetailsComponent(jobPostService, route, modalService, toastService) {
          _classCallCheck(this, JobDetailsComponent);

          this.jobPostService = jobPostService;
          this.route = route;
          this.modalService = modalService;
          this.toastService = toastService;
          this.isServiceRunning = false;
          this.jobPost = {};
          this.post = {};
          this.skills = [];
          this.role = undefined;
          this.appliedDate = undefined;
        }

        _createClass(JobDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.isServiceRunning = true;
            this.role = JSON.parse(window.atob(window.localStorage.getItem('id'))).role;
            this.jobPostService.getMyApplications();
            this.jobPost.jobPost = {};
            this.jobPost.jobPost.details = [];
            this.route.params.subscribe(function (params) {
              if (params.id) {
                _this40.jobPostService.myApplications.subscribe(function (data) {
                  data.forEach(function (post) {
                    if (post.jobPostId === params.id) {
                      _this40.appliedDate = post.date;
                    }
                  });
                });

                _this40.jobPostService.getJobPost({
                  id: params.id
                }).subscribe(function (data) {
                  _this40.jobPost = data.data;
                  _this40.isServiceRunning = false;
                  _this40.skills = _this40.jobPost.jobPost.skills;
                });
              }
            });
          }
        }, {
          key: "applyJobModal",
          value: function applyJobModal(template) {
            this.modalRef = this.modalService.show(template, {
              "class": 'half-modal',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "applyJob",
          value: function applyJob() {
            var _this41 = this;

            var obj = {
              candidateId: JSON.parse(window.atob(window.localStorage.getItem('id')))._id,
              jobPostId: this.jobPost._id,
              date: new Date()
            };
            this.jobPostService.applyJobPost(obj).subscribe(function (data) {
              if (data.data) {
                _this41.toastService.showToast('Applied successfully!');

                _this41.jobPostService.getMyApplications();

                _this41.modalRef.hide();
              }
            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalRef.hide();
            this.jobPostService.post = undefined;
          }
        }, {
          key: "editJobPost",
          value: function editJobPost() {
            this.jobPostService.post = undefined;
            this.jobPostService.post = this.jobPost;
            this.modalRef = this.modalService.show(_add_job_post_component__WEBPACK_IMPORTED_MODULE_3__["AddJobPostComponent"], {
              "class": 'full-modal bg-light-grey',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "getExperience",
          value: function getExperience(value) {
            return "".concat(value, " - ").concat(value + 1);
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(date) {
            var date1 = new Date();
            var date2 = new Date(date);
            var diffTime = Math.abs(date2 - date1);
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays >= 7;
          }
        }]);

        return JobDetailsComponent;
      }();

      JobDetailsComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_job_post_service_service__WEBPACK_IMPORTED_MODULE_7__["JobPostServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
        }, {
          type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
        }];
      };

      JobDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-job-details-shared',
        template: _raw_loader_job_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_job_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], JobDetailsComponent);
      /***/
    },

    /***/
    "t1wX":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/all-job-posts/all-job-posts.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function t1wX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w-100 h-100 m-0 p-0\" style=\"overflow: auto; border-radius: 7px; background-color: #f8f8f8\"\n  *ngIf=\"!isServiceRunning\">\n  <div class=\"row col-sm-10 justify-content-center px-0 pt-2 mx-auto\">\n    <div class=\"col-sm-3 d-flex justify-content-center\">\n      <div class=\"m-2 d-flex justify-content-center vertical-center\">\n        <h5 class=\"text-bold p-3\">Showing\n          {{filteredJobPosts.length}} Jobs</h5>\n      </div>\n    </div>\n    <div class=\"col-sm-9 justify-content-center\">\n      <div class=\"row col-sm-12 justify-content-center vertical-center shadow bg-white p-2 border-6 mx-auto \">\n        <div class=\"col-sm-10 vertical-center justify-content-center\">\n          <input type=\"text\" (input)=\"filterJobPosts()\" placeholder=\"Search by skills or job title\"\n            class=\"no-border bg-white text-black\" style=\"width: 95%;\" [formControl]=\"myControl\">\n        </div>\n        <button class=\"col-sm-2 btn btn-primary px-2 py-1 border-6 \" (click)=\"filterJobPosts()\">Search </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row col-sm-12 justify-content center px-0 bg-lightest-blue mx-0\">\n    <div class=\"row col-sm-10 justify-content-center px-0 pt-2 mx-auto mt-4\">\n      <div class=\"col-sm-3 mt-2\">\n        <div (click)=\"openRefineJobs()\"\n          class=\"border-12 m-2 mr-2 w-100 bg-white overlay text-dark p-3 semi-bold text-ssmd vertical-center justify-content-between\">\n          Refine\n          Jobs <span class=\"material-icons\" *ngIf=\"!isScreenBig\">\n            arrow_drop_down\n          </span></div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isSortByExpanded = !isSortByExpanded\">\n            <span class=\"text-ssmd\">Sort By</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isSortByExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\n          </div>\n          <div *ngIf=\"isSortByExpanded\" class=\"my-2 row vertical-center justify-content-center\">\n            <div class=\"m-2\">\n              <span style=\"border-radius: 20px;\"\n                [ngClass]=\"isSortBy === true ? 'sort-by-selected' : 'sort-by-not-selected'\" class=\" px-3 py-1\"\n                (click)=\"isSortBy = true\">Relevance</span>\n            </div>\n            <div class=\"m-2\">\n              <span style=\"border-radius: 20px;\" (click)=\"isSortBy = false\"\n                [ngClass]=\"isSortBy === false ? 'sort-by-selected' : 'sort-by-not-selected'\"\n                class=\"px-3 py-1\">Date</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isExperienceExpanded = !isExperienceExpanded\">\n            <span class=\"text-ssmd\">Experience</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isExperienceExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\n          </div>\n          <div *ngIf=\"isExperienceExpanded\" class=\"my-2\">\n            <label class=\"text-sm text-grey\">Minimum Experience req. (in years)</label>\n            <mat-slider class=\"w-100\" [(ngModel)]=\"refine.minExp\" thumbLabel displayWith=\"\" tickInterval=\"1\" min=\"0\"\n              max=\"10\">\n            </mat-slider>\n          </div>\n        </div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isPartTimeExpanded = !isPartTimeExpanded\">\n            <span class=\"text-ssmd\">Job Type</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isPartTimeExpanded === true? 'rotate-right': 'rotate-left'\"> expand_more</span>\n          </div>\n          <div *ngIf=\"isPartTimeExpanded\" class=\"my-2 p-2\">\n            <div class=\"mb-3 vertical-center\">\n              <span class=\"text-sm semi-bold text-grey mr-2\">Part\n                time</span>\n              <mat-slide-toggle [(ngModel)]=\"refine.partTime\"></mat-slide-toggle>\n            </div>\n            <div class=\"mb-2 vertical-center\">\n              <span class=\"text-sm semi-bold text-grey mr-2\">Full\n                time</span>\n              <mat-slide-toggle [(ngModel)]=\"refine.fullTime\"></mat-slide-toggle>\n            </div>\n            <div class=\"mb-2 vertical-center\">\n              <span class=\"text-sm semi-bold text-grey mr-2\">Contractual</span>\n              <mat-slide-toggle [(ngModel)]=\"refine.contractual\"></mat-slide-toggle>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isJobCategoryExpanded = !isJobCategoryExpanded\">\n            <span class=\"text-ssmd\">Job Category</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isJobCategoryExpanded === true? 'rotate-right': 'rotate-left'\"> expand_more</span>\n          </div>\n          <div *ngIf=\"isJobCategoryExpanded\" class=\"my-2 p-2\">\n            <div class=\"mb-3 vertical-center\">\n              <span class=\"text-sm semi-bold text-grey mr-2\">Jobs</span>\n              <mat-slide-toggle [(ngModel)]=\"refine.jobs\"></mat-slide-toggle>\n            </div>\n            <div class=\"mb-2 vertical-center\">\n              <span class=\"text-sm semi-bold text-grey mr-2\">Internships</span>\n              <mat-slide-toggle [(ngModel)]=\"refine.internships\"></mat-slide-toggle>\n            </div>\n          </div>\n        </div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isRemoteExpanded = !isRemoteExpanded\">\n            <span class=\"text-ssmd\">Remote</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isRemoteExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\n          </div>\n          <div *ngIf=\"isRemoteExpanded\" class=\"my-2\">\n            <mat-slide-toggle [(ngModel)]=\"refine.remote\"></mat-slide-toggle>\n          </div>\n        </div>\n        <div class=\"border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3\" *ngIf=\"refineJobsDropDown\">\n          <div class=\"vertical-center justify-content-between\" (click)=\"isLocationExpanded = !isLocationExpanded\">\n            <span class=\"text-ssmd\">Location</span>\n            <span class=\"material-icons text-grey text-md bold\"\n              [ngClass]=\"isLocationExpanded === true? 'rotate-right': 'rotate-left'\">expand_more</span>\n          </div>\n          <div *ngIf=\"isLocationExpanded\" class=\"px-3 pt-3 pb-1\">\n            <div *ngFor=\"let location of allLocations\">\n              <section class=\"example-section\">\n                <mat-checkbox class=\"example-margin text-uppercase\" [checked]=\"checkLocation(location)\"\n                  (change)=\"updateLocation($event, location)\">\n                  {{location}}\n                </mat-checkbox>\n              </section>\n            </div>\n          </div>\n        </div>\n        <div class=\"row col-sm-12 justify-content-center mx-auto\">\n          <button *ngIf=\"isChanged()\" class=\"overlay btn btn-primary mx-auto text-smd\"\n            style=\"border-radius: 30px; bottom: 0\" (click)=\"refineJobs()\">Refine\n            Jobs</button>\n          <button *ngIf=\"isFilterAdded()\" class=\"overlay btn btn-primary text-smd\" (click)=\"clearFilter()\"\n            style=\"border-radius: 30px; bottom: 0\">Clear Filter</button>\n        </div>\n      </div>\n\n      <div class=\"col-sm-9 mx-0 mt-2 p-0\">\n        <app-not-found *ngIf=\"filteredJobPosts.length === 0\"\n          message=\"We couldn't find any results. Change selected filters or try later.\"\n          style=\"margin-top: 6rem !important;\" class=\"center-parent\">\n        </app-not-found>\n\n        <div class=\"m-2 mr-2 mb-3 \" *ngFor=\"let jobPost of filteredJobPosts\" (click)=\"seeDetails(jobPost)\">\n          <div class=\"card border-4 shadow-lg p-3 text-link border-8\">\n            <div class=\"d-flex mb-3 justify-content-between\">\n              <div class=\"d-flex flex-wrap\">\n                <div class=\"mr-3 mb-2\">\n                  <span>\n                    <img class=\"border-6\" *ngIf=\"jobPost.jobPost.companyLogo\" src=\"{{jobPost.jobPost.companyLogo}}\"\n                      style=\"height: 60px; width: 58.2px;\">\n                  </span>\n                </div>\n                <div class=\"text-left\">\n                  <h4>{{jobPost.jobPost.title}}</h4>\n                  <div class=\"column\">\n                    <div class=\"d-flex vertical-center flex-wrap\">\n                      <div class=\" vertical-center justify-content-start mr-3\">\n                        <span class=\"material-icons-outlined  mr-2 text-primary\">work</span>\n                        <span class=\" text-lato text-primary d-inline\">Experience : </span>\n                        <span class=\"text-lato text-primary\">&nbsp;{{ jobPost.jobPost ? jobPost.jobPost.experience :\n                          ''\n                          }}\n                          years</span>\n                      </div>\n\n                      <div class=\"vertical-center justify-content-start mr-3\">\n                        <span class=\"material-icons  mr-2 text-primary\">business</span>\n                        <span class=\" text-lato text-primary d-inline\">Company : </span>\n                        <span class=\"text-lato text-primary\">&nbsp;{{jobPost.jobPost.companyName}}</span>\n                      </div>\n                    </div>\n                    <div class=\"d-flex flex-wrap mt-1\">\n                      <div *ngIf=\"jobPost.jobPost.jobType === 'In office'\"\n                        class=\" vertical-center justify-content-start mr-2\">\n                        <span class=\"material-icons-outlined text-md  mr-2 text-primary\">location_on</span>\n                        <span class=\" text-lato text-smd text-primary\">&nbsp;{{jobPost.jobPost.location}}</span>\n                      </div>\n\n                      <div *ngIf=\"jobPost.jobPost.jobType !== 'In office'\"\n                        class=\" vertical-center justify-content-start mr-2\">\n                        <span class=\"material-icons-outlined text-md  mr-2 text-primary\">home</span>\n                        <span class=\" text-lato text-smd text-primary d-inline\">Work from home</span>\n                      </div>\n\n                      <div class=\"vertical-center justify-content-start mr-2\">\n                        <span class=\"material-icons text-md  mr-2 text-primary\">\n                          schedule\n                        </span>\n                        <span class=\" text-smd text-lato text-primary\">Published on&nbsp;{{jobPost.jobPost.createdAt |\n                          date: 'dd\n                          MMMM\n                          yyyy'}}</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div *ngIf=\"jobPost.isApplied\" class=\" d-flex align-items-start justify-content-center\">\n                <div class=\"p-2 bg-light border-12\">Applied</div>\n              </div>\n            </div>\n            <div class=\"d-flex justify-content-between flex-wrap vertical-center\">\n              <div class=\"my-2 d-flex vertical-center flex-wrap\" *ngIf=\"jobPost.jobPost.skills.length > 0\">\n\n                <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\">\n                  {{jobPost.jobPost.skills[0].skillName }}\n                </div>\n                <div class=\"px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm\"\n                  *ngIf=\"jobPost.jobPost.skills.length > 1\">\n                  {{jobPost.jobPost.skills[1].skillName }}\n                </div>\n              </div>\n\n              <div class=\"d-flex vertical-center flex-wrap justify-content-between\">\n                <div class=\"justify-content-between vertical-center mr-2\">\n                  <div class=\"btn btn-primary px-2 py-1 mr-2 border-6 text-white text-lato text-sm\">REWARD :\n                    ₹{{jobPost.referReward}}</div>\n                </div>\n                <div class=\"my-2 vertical-center justify-content-start\">\n                  <span class=\"text-black text-slmd\">&nbsp; ₹ {{jobPost.jobPost.salary}}</span>\n                  <div class=\"d-flex ml-1 align-self-end\">\n                    <span class=\"text-fluid \">{{jobPost.jobPost.salaryType}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-spinner-component *ngIf=\"isServiceRunning\"></app-spinner-component>";
      /***/
    },

    /***/
    "uHDt":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uHDt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"w-100 vertical-center\" *ngIf=\"visibility\">\n  <div class=\"flex-column d-flex align-items-center vertical-center w-100\">\n    <img class=\"img-login\" src=\"../../../../assets/not-found-search.png\">\n    <span class=\"text-semibold text-md\">{{title}}</span>\n    <small class=\"text-smd text-semibold text-center\" style=\"width: 75%;\">{{message}}</small>\n  </div>\n</div>";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./log-in/log-in.component */
      "br8r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/auth-guard/auth-guard */
      "fJ1W");

      var routes = [{
        path: 'login',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login/:code/:user',
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_1__["LogInComponent"]
      }, {
        path: 'referer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-user-module */
          "user-user-module").then(__webpack_require__.bind(null,
          /*! ./user/user.module */
          "7UCR")).then(function (m) {
            return m.UserModule;
          });
        },
        canActivate: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]]
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | admin-admin-module */
          [__webpack_require__.e("common"), __webpack_require__.e("admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./admin/admin.module */
          "jkDv")).then(function (m) {
            return m.AdminModule;
          });
        },
        canActivate: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]]
      }, {
        path: 'recruiter',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | employer-employer-module */
          [__webpack_require__.e("common"), __webpack_require__.e("employer-employer-module")]).then(__webpack_require__.bind(null,
          /*! ./employer/employer.module */
          "mXZA")).then(function (m) {
            return m.EmployerModule;
          });
        },
        canActivate: [_shared_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]]
      }, {
        path: '**',
        redirectTo: 'login'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "z7Ah":
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/emp-recent-job-posts/emp-recent-job-posts.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: EmpRecentJobPostsComponent */

    /***/
    function z7Ah(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmpRecentJobPostsComponent", function () {
        return EmpRecentJobPostsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emp_recent_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emp-recent-job-posts.component.html */
      "AkDi");
      /* harmony import */


      var _emp_recent_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./emp-recent-job-posts.component.scss */
      "5Dfi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../services/job-post-service.service */
      "hLKV");
      /* harmony import */


      var _components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../components/add-job-post/add-job-post.component */
      "8ymR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");

      var EmpRecentJobPostsComponent = /*#__PURE__*/function () {
        function EmpRecentJobPostsComponent(router, modalRef, modalService, jobPostService) {
          _classCallCheck(this, EmpRecentJobPostsComponent);

          this.router = router;
          this.modalRef = modalRef;
          this.modalService = modalService;
          this.jobPostService = jobPostService;
          this.allJobPost = [];
          this.isServiceRunning = false;
        }

        _createClass(EmpRecentJobPostsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this42 = this;

            if (this.router.url.includes('create')) {
              this.addJobPost();
            }

            this.jobPostService.getPosts();
            this.jobPostService.jobPosts.subscribe(function (data) {
              _this42.allJobPost = data;
            });
          }
        }, {
          key: "addJobPost",
          value: function addJobPost() {
            this.jobPostService.post = undefined;
            this.modalRef = this.modalService.show(_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], {
              "class": 'full-modal bg-light-grey',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "editJobPost",
          value: function editJobPost(post) {
            this.jobPostService.post = undefined;
            this.jobPostService.post = post;
            this.modalRef = this.modalService.show(_components_add_job_post_add_job_post_component__WEBPACK_IMPORTED_MODULE_5__["AddJobPostComponent"], {
              "class": 'full-modal bg-light-grey',
              ignoreBackdropClick: true,
              animated: true
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(data) {
            this.jobPostService.postDetail = data;
            this.router.navigateByUrl("/recruiter/job-posts/detail/".concat(data._id));
          }
        }, {
          key: "navigateToAllJobs",
          value: function navigateToAllJobs() {
            this.router.navigateByUrl("/recruiter/job-posts");
          }
        }, {
          key: "navigateToMyProfile",
          value: function navigateToMyProfile() {
            this.router.navigateByUrl("/recruiter/profile");
          }
        }]);

        return EmpRecentJobPostsComponent;
      }();

      EmpRecentJobPostsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalRef"]
        }, {
          type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"]
        }, {
          type: _services_job_post_service_service__WEBPACK_IMPORTED_MODULE_4__["JobPostServiceService"]
        }];
      };

      EmpRecentJobPostsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-emp-recent-job-posts',
        template: _raw_loader_emp_recent_job_posts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_emp_recent_job_posts_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmpRecentJobPostsComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map