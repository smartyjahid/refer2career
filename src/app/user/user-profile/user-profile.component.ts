import { AngularFireStorageModule } from '@angular/fire/storage';
import { startWith, map } from 'rxjs/operators';
import { DbOperation } from './../../shared/models/dbOperation';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {

  constructor(
    private storage: AngularFireStorageModule,
    private menu: MenuController,
    private modalRef: BsModalRef,
    private modalService: BsModalService,
    private authService: AuthService,
    private toastService: ToastService) {
  }

  get profileCompleted() {
    let percent = 12;
    if (this.cvHeadLine) { percent += 10; }
    if (this.workExpArray) {
      if (this.workExpArray.length > 0) { percent += 15; }
    }
    if (this.skillsArray) {
      if (this.skillsArray.length > 0) { percent += 12; }
    }
    if (this.educationArray) {
      if (this.educationArray.length > 0) { percent += 11; }
    }
    if (this.user.resume) { percent += 15; }
    if (this.user.basicInfo) { percent += 15; }
    if (this.user.photo) { percent += 10; }
    document.getElementById('progress-bar').style.width = percent + '%';
    this.percent = percent;
    return percent;
  }



  basePath = '/profile-resumes';
  uploadTask: firebase.storage.UploadTask;

  blob: any;
  filename: any;

  user: any = {};
  isEditing = false;

  isBasiDetailEditing = false;
  skillName = new FormControl(null, Validators.required);
  skillsArray: string[] = [];

  isServiceRunning = false;

  profileForm: FormGroup;

  range = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  workExpToUpdate: any = undefined;
  workExpArray: any[] = [];

  title = new FormControl('', Validators.required);
  companyName = new FormControl('', Validators.required);

  educationToUpdate: any = undefined;

  educationDetailsForm: FormGroup;
  workExpForm: FormGroup;
  educationArray: any[] = [];

  cvHeadLine = '';
  isCVHeadEditing = false;

  maxDob = new Date(2006, 11, 31);

  // for education
  qualificationOptions: string[] = ['Diploma In Mechanical Engineering',
    'Diploma In Civil Engineering', 'Diploma In Electrical Engineering',
    'Diploma In Electronics And Communication Engineering',
    'Diploma In Electrical & Electronics Engineering',
    'Diploma In Computer Engineering',
    'Diploma In Computer Science And Engineering',
    'Diploma In Automobile Engineering',
    'Diploma In Information Technology',
    'Diploma In Electronics Engineering',
    'Diploma In Chemical Engineering',
    'Diploma In Electrical & Communication Engineering',
    'Diploma In Production Engineering', 'Diploma In Mining Engineering',
    'Diploma In Architecture Engineering', 'Diploma In Mechatronics',
    'Diploma In Electronics', 'Diploma In Printing Technology',
    'Diploma In Fire And Safety Management',
    'Diploma In Biomedical Engineering',
    'Diploma In Sound Engineering', 'Diploma In Marine Engineering',
    'Bachelor Of Technology(Mechanical Engineering)',
    'Bachelor Of Technology(Computer Science And Engineering)',
    'Bachelor Of Technology(Civil Engineering)',
    'Bachelor Of Technology (Electronics & Communication Engineering)',
    'Bachelor Of Business Administration [BBA]',
    'Bachelor Of Business Management [BBM]',
    'Bachelor Of Business Administration [BBA] (Marketing)',
    'Bachelor Of Business Administration [BBA] (Human Resource Management)',
    'Bachelor Of Management Studies [BMS]',
    'Bachelor Of Business Administration [BBA] (Finance)',
    'Bachelor Of Business Administration [BBA] {Hons.}',
    'Bachelor Of Business Administration [BBA] (International Business)',
    'Bachelor Of Tourism And Travel Management [BTTM]',
    'Bachelor Of Science [B.Sc] (Physics)',
    'Bachelor Of Science h [B.Sc] (Chemistry)',
    'Bachelor Of Science [B.Sc] (Computer Science)',
    'Bachelor Of Science [B.Sc] (Mathematics)',
    'Bachelor Of Science [B.Sc] (Zoology)',
    'Bachelor Of Science [B.Sc] (Botany)',
    'Bachelor Of Science [B.Sc] (Biotechnology)',
    'Bachelor Of Science [B.Sc] (Microbiology)',
    'Bachelor Of Science [B.Sc] (Information Technology)',
    'Bachelor Of Science [B.Sc]'];
  filteredQualifications: Observable<string[]>;

  skillsOptions: string[] = ['Java', 'Event Management', 'Angular 10', 'HTML', 'CSS',
    'Java Script', 'Type Script', 'Firebase', 'Management', 'Accounting'];
  filteredSkills: Observable<string[]>;

  navItems: any[] = [
    {
      name: 'DASHBOARD',
      route: '/referer/dashboard'
    },
    {
      name: 'MY PROFILE',
      route: '/referer/profile'
    },
    {
      name: 'JOB POSTS',
      route: '/referer/jobs'
    },
    {
      name: 'APPLIED JOB',
      route: '/referer/my-applications'
    },
    {
      name: 'REFERRED PROFILE',
      route: '/referer/referred'
    }
  ];

  percent = 12;

  openResume() {
    window.open(this.user.resume, '_blank');
  }

  async uploadResume() {
    this.isServiceRunning = true;
    const storageRef: any = firebase.storage().ref();
    const time = new Date().getTime();
    await storageRef.child(`${this.basePath}/${this.user.name}${time}${this.filename}`).put(this.blob);
    storageRef.child(`${this.basePath}/${this.user.name}${time}${this.filename}`).getDownloadURL().then(async (url) => {
      const dbOpeartion: DbOperation = {
        collection: 'users',
        query: { _id: this.user._id },
        data: { resume: url }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.isServiceRunning = false;
          this.getUser();
        }
      });
    });
  }

  fileChange(event: any) {
    this.blob = event.target.files[0];
    this.filename = event.target.files[0].name;
    this.uploadResume();
  }

  ngOnInit() {

    this.user = JSON.parse(window.atob(window.localStorage.getItem('id')));
    this.getUser();
    this.initializeProfileForm();
    this.initializeWorkExpForm();
    this.initializeEducationForm();
    if (this.user.cvHead) {
      this.cvHeadLine = this.user.cvHead;
    }
    this.educationArray = this.user.education ? this.user.education : [];
    this.workExpArray = this.user.workExperience ? this.user.workExperience : [];
    this.skillsArray = this.user.skills ? this.user.skills : [];
    this.setBasicInfo();

    this.filteredQualifications = this.educationDetailsForm.get('degree').valueChanges.pipe(
      startWith(''),
      map(value => this._filterQualifications(value))
    );

    this.filteredSkills = this.skillName.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSkills(value))
    );

    this.workExpForm.get('isWorking').valueChanges.subscribe(val => {
      if (this.workExpForm.get('isWorking').value !== true) {
        this.workExpForm.controls.endDate.setValidators([Validators.required]);
        this.workExpForm.controls.endDate.updateValueAndValidity();
      } else {
        this.workExpForm.controls.endDate.clearValidators();
        this.workExpForm.controls.endDate.updateValueAndValidity();
      }
    });
    this.isServiceRunning = false;
  }


  setBasicInfo() {
    if (this.user.basicInfo) {
      this.profileForm.patchValue({
        mobile: this.user.basicInfo.mobile,
        gender: this.user.basicInfo.gender,
        martialStatus: this.user.basicInfo.martialStatus,
        dob: this.user.basicInfo.dob,
        nationality: this.user.basicInfo.nationality,
      });
    }
    else { this.profileForm.reset(); }
  }

  basicInfoEdit() {
    this.isBasiDetailEditing = !this.isBasiDetailEditing;
    if (!this.isBasiDetailEditing) {
      this.setBasicInfo();
    }
  }

  private _filterQualifications(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.qualificationOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterSkills(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.skillsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  initializeProfileForm() {
    this.profileForm = new FormGroup({
      martialStatus: new FormControl('', Validators.required),
      nationality: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
    });
  }

  initializeEducationForm() {
    this.educationDetailsForm = new FormGroup({
      completionDate: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      degree: new FormControl(null, Validators.required),
      school: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      field: new FormControl(null, Validators.required),
    });
  }

  initializeWorkExpForm() {
    this.workExpForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      companyName: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      isWorking: new FormControl(false, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null),
      description: new FormControl(null, Validators.required),
    });
  }

  saveBasicInfo() {
    this.profileForm.markAllAsTouched();
    if (this.profileForm.valid) {
      this.isServiceRunning = true;
      const basicInfo: any = {
        mobile: this.profileForm.get('mobile').value,
        gender: this.profileForm.get('gender').value,
        martialStatus: this.profileForm.get('martialStatus').value,
        dob: this.profileForm.get('dob').value,
        nationality: this.profileForm.get('nationality').value,
      };
      const dbOpeartion: DbOperation = {
        collection: 'users',
        data: { basicInfo, profileCompleted: this.profileCompleted },
        query: { _id: this.user._id }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.isBasiDetailEditing = false;
          this.setBasicInfo();
          this.isServiceRunning = false;
        }
      });
    }
  }

  addSkill() {
    this.skillName.markAsTouched();
    if (this.skillName.value) {
      this.isServiceRunning = true;
      if (!this.skillsArray.includes(this.skillName.value)) {
        this.skillsArray.push(this.skillName.value);
      }
      this.skillName.reset();
      const dbOpeartion: DbOperation = {
        collection: 'users',
        data: { skills: this.skillsArray, profileCompleted: this.profileCompleted },
        query: { _id: this.user._id }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.modalRef.hide();
          this.isServiceRunning = false;
        }
      });
    }
  }

  removeTag(index: any) {
    this.isServiceRunning = true;
    this.skillsArray.splice(index, 1);
    const dbOpeartion: DbOperation = {
      collection: 'users',
      data: { skills: this.skillsArray, profileCompleted: this.profileCompleted },
      query: { _id: this.user._id }
    };
    this.authService.update(dbOpeartion).then((data: any) => {
      if (data.data === true) {
        this.getUser();
        this.modalRef.hide();
        this.isServiceRunning = false;
      }
    });
  }

  openWorkExpModal(template: any) {
    this.workExpToUpdate = undefined;
    this.range.reset();
    this.title.reset();
    this.companyName.reset();
    this.workExpToUpdate = undefined;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  closeModal() {
    this.modalRef.hide();
  }

  addWorkExp() {
    this.workExpForm.markAllAsTouched();
    if (this.workExpForm.valid) {
      const workExp: any = {
        title: this.workExpForm.get('title').value,
        type: this.workExpForm.get('type').value,
        companyName: this.workExpForm.get('companyName').value,
        location: this.workExpForm.get('location').value,
        isWorking: this.workExpForm.get('isWorking').value,
        startDate: this.workExpForm.get('startDate').value,
        endDate: this.workExpForm.get('endDate').value,
        description: this.workExpForm.get('description').value,
      };
      if (this.workExpToUpdate === undefined) {
        this.workExpArray.push(workExp);
      }
      else { this.workExpArray[this.workExpToUpdate] = workExp; }
      this.workExpToUpdate = undefined;
      const totalWorkExp = this.calculateExp();
      const dbOpeartion: DbOperation = {
        collection: 'users',
        data: { workExperience: this.workExpArray, totalWorkExp: +totalWorkExp },
        query: { _id: this.user._id }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.isServiceRunning = false;
        }
      });
      this.modalRef.hide();
    }
  }

  calculateExp() {
    let total = 0;
    for (const post of this.workExpArray) {
      const dateFirst = post.endDate !== null ? new Date(post.endDate) : new Date();
      const dateSecond = new Date(post.startDate);
      // time difference
      const timeDiff = Math.abs(dateFirst.getTime() - dateSecond.getTime());

      // days difference
      const diffYears = (timeDiff / (1000 * 3600 * 24 * 365));
      total += diffYears;

    }
    return total.toFixed(0);

  }

  editWorkExp(workExp: any, template: any, i) {
    this.workExpToUpdate = i;
    this.workExpForm.patchValue({
      title: workExp.title,
      type: workExp.type,
      companyName: workExp.companyName,
      location: workExp.location,
      isWorking: workExp.isWorking,
      startDate: workExp.startDate,
      endDate: workExp.endDate,
      description: workExp.description,
    });
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  deleteWorkExp(index: number) {
    this.isServiceRunning = false;
    this.workExpArray.splice(index, 1);
    const totalWorkExp = this.calculateExp();
    const dbOpeartion: DbOperation = {
      collection: 'users',
      data: { workExperience: this.workExpArray, totalWorkExp },
      query: { _id: this.user._id }
    };
    this.authService.update(dbOpeartion).then((data: any) => {
      if (data.data === true) {
        this.getUser();
        this.isServiceRunning = false;
      }
    });
  }

  openEducationModal(template: any) {
    this.educationDetailsForm.reset();
    this.educationToUpdate = undefined;
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  addEducation() {
    this.educationDetailsForm.markAllAsTouched();
    if (this.educationDetailsForm.valid) {
      this.isServiceRunning = true;
      const education = {
        completionDate: this.educationDetailsForm.get('completionDate').value,
        degree: this.educationDetailsForm.get('degree').value,
        school: this.educationDetailsForm.get('school').value,
        type: this.educationDetailsForm.get('type').value,
        location: this.educationDetailsForm.get('location').value,
        field: this.educationDetailsForm.get('field').value,
      };
      if (this.educationToUpdate === undefined) {
        this.educationArray.push(education);
      }
      else { this.educationArray[this.educationToUpdate] = education; }
      this.educationToUpdate = undefined;
      const dbOpeartion: DbOperation = {
        collection: 'users',
        data: { education: this.educationArray },
        query: { _id: this.user._id }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.isServiceRunning = false;
        }
      });
      this.modalRef.hide();
    }
  }

  deleteEducation(index: number) {
    this.isServiceRunning = true;
    this.educationArray.splice(index, 1);
    const dbOpeartion: DbOperation = {
      collection: 'users',
      data: { education: this.educationArray },
      query: { _id: this.user._id }
    };
    this.authService.update(dbOpeartion).then((data: any) => {
      if (data.data === true) {
        this.getUser();
        this.isServiceRunning = false;
      }
    });
  }

  editEducation(education: any, template: any, i) {
    this.educationToUpdate = i;
    this.educationDetailsForm.patchValue({
      completionDate: education.completionDate,
      degree: education.degree,
      school: education.school,
      location: education.location,
      type: education.type,
      field: education.field,
    });
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  openSkillModal(template: any) {
    this.skillName.patchValue('');
    this.modalRef = this.modalService.show(template, { ignoreBackdropClick: true, animated: true });
  }

  uploadImage(event: any, id = 0) {
    this.isServiceRunning = true;
    const reader: FileReader = new FileReader();
    reader.onload = (file: any) => {
      this.user.photo = file.target.result;
      const dbOpeartion: DbOperation = {
        collection: 'users',
        data: { photo: this.user.photo, profileCompleted: this.profileCompleted },
        query: { _id: this.user._id }
      };
      this.authService.update(dbOpeartion).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.isServiceRunning = false;
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  editCVHead() {
    if (this.isCVHeadEditing) {
      this.cvHeadLine = this.user.cvHead ? this.user.cvHead : '';
    }
    this.isCVHeadEditing = !this.isCVHeadEditing;
  }

  saveCVHeadLine() {
    if (this.isCVHeadEditing) {
      this.isServiceRunning = true;
      this.authService.update({
        collection: 'users', data: { cvHead: this.cvHeadLine, profileCompleted: this.profileCompleted },
        query: { _id: this.user._id }
      }).then((data: any) => {
        if (data.data === true) {
          this.getUser();
          this.isCVHeadEditing = false;
          this.isServiceRunning = false;
        }
        else {
          this.isServiceRunning = false;
        }
      },
        err => console.log(err));
    }
  }

  getUser() {
    this.isServiceRunning = true;
    this.authService.find({
      collection: 'users', query: {
        _id: this.user._id
      }
    }).subscribe((data: any) => {
      if (data.data.length > 0) {
        this.user = data.data[0];
        this.setBasicInfo();
        this.isServiceRunning = false;
        this.updateProfileCompletion();
        window.localStorage.setItem('id', window.btoa(JSON.stringify(this.user)));
      }
    });
  }

  otpRequest() {
  }

  updateProfileCompletion() {
    this.isServiceRunning = true;
    const dbOpeartion: DbOperation = {
      collection: 'users',
      data: { profileCompleted: this.percent },
      query: { _id: this.user._id }
    };
    this.authService.update(dbOpeartion).then((data: any) => {
      if (data.data === true) {
        this.modalRef.hide();
        this.isServiceRunning = false;
      }
    });
  }
}




