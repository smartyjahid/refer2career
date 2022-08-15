import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})




export class AdminProfileComponent implements OnInit {

  user: any = {};
  isServiceRunning = false;
  isEditing = false;
  organizationLogo: any;
  organizationLogoData: any;
  userPhoto: any;
  userPhotoData: any;

  detailForm: FormGroup;

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.user.personalDetails = {};
    this.authService.getDetails({ email: JSON.parse(window.atob(window.localStorage.getItem('id'))).email }).subscribe((data: any) => {
      this.user = data.data;
      this.initializeDetails();
    },
      err => console.log(err.message)
    );
  }

  initializeDetails() {
    this.detailForm.patchValue({
      name: this.user.name,
      email: this.user.email,
      mobile: this.user.mobile,
      alternateNumber: this.user.alternateNumber,
      organizationName: this.user.organizationDetails.organizationName,
      organizationEmail: this.user.organizationDetails.organizationEmail,
      organizationMobile: this.user.organizationDetails.organizationMobile,
      field: this.user.organizationDetails.organizationField,
      addressLineOne: this.user.organizationDetails.addressLineOne,
      addressLineTwo: this.user.organizationDetails.addressLineTwo,
      pincode: this.user.organizationDetails.pincode,
      city: this.user.organizationDetails.city,
    });
    this.userPhoto = this.user.photo;
    this.organizationLogo = this.user.organizationDetails.logo;
  }

  initializeForm() {
    if (!this.user.organizationDetails) { this.user.organizationDetails = {}; }
    this.detailForm = new FormGroup({
      name: new FormControl({ value: this.user.name, disabled: true }, [Validators.required]),
      email: new FormControl({ value: this.user.email, disabled: true }, [Validators.required, Validators.email]),
      mobile: new FormControl({ value: this.user.mobile, disabled: true },
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl({ value: this.user.alternateNumber, disabled: true }, [Validators.required]),
      organizationName: new FormControl(this.user.organizationDetails.organizationName, [Validators.required]),
      organizationEmail: new FormControl(this.user.organizationDetails.organizationEmail,
        [Validators.required, Validators.email]),
      organizationMobile: new FormControl(this.user.organizationDetails.organizationMobile,
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      field: new FormControl(this.user.organizationDetails.organizationField, [Validators.required]),
      addressLineOne: new FormControl(this.user.organizationDetails.addressLineOne, [Validators.required]),
      addressLineTwo: new FormControl(this.user.organizationDetails.addressLineTwo,
        [Validators.required]),
      city: new FormControl(this.user.organizationDetails.city, [Validators.required]),
      pincode: new FormControl(this.user.organizationDetails.pincode,
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
    this.detailForm.disable();
  }

  onEnableEditing() {
    this.isEditing = true;
    this.detailForm.enable();
    this.detailForm.controls.name.disable();
    this.detailForm.controls.email.disable();
  }


  uploadImage(event: any, id = 0) {
    const reader: FileReader = new FileReader();
    reader.onload = (file: any) => {
      if (id === 0) {
        this.organizationLogo = file.target.result;
      }
      else {
        this.userPhoto = file.target.result;
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    if (id === 0) {
      this.organizationLogoData = event.target.files[0];
    }
    else {
      this.userPhotoData = event.target.files[0];
    }
  }

  save() {
    this.detailForm.markAllAsTouched();
    if (this.detailForm.valid) {
      const details: any = {
        email: this.user.email,
        mobile: this.detailForm.get('mobile').value,
        alternateNumber: this.detailForm.get('alternateNumber').value,
        photo: this.userPhoto,
        organizationDetails: {
          organizationName: this.detailForm.get('organizationName').value,
          organizationField: this.detailForm.get('field').value,
          organizationEmail: this.detailForm.get('organizationEmail').value,
          organizationMobile: this.detailForm.get('organizationMobile').value,
          addressLineOne: this.detailForm.get('addressLineOne').value,
          addressLineTwo: this.detailForm.get('addressLineTwo').value,
          city: this.detailForm.get('city').value,
          pincode: this.detailForm.get('pincode').value,
          logo: this.organizationLogo
        }
      };
      this.authService.updateAdminDetails(details).then(data => {
        if (data) {
          this.isEditing = false;
          this.detailForm.disable();
          this.toastService.showToast('Details Updated Successfully!');
        }
        else { this.toastService.showToast('Something went wrong!', 'bg-danger'); }
      });
    }
  }

  cancel() {
    this.detailForm.patchValue({
      mobile: this.user.mobile,
      alternateNumber: this.user.alternateNumber,
      organizationName: this.user.organizationDetails.organizationName,
      organizationEmail: this.user.organizationDetails.organizationEmail,
      field: this.user.organizationDetails.organizationField,
      organizationMobile: this.user.organizationDetails.organizationMobile,
      addressLineOne: this.user.organizationDetails.addressLineOne,
      addressLineTwo: this.user.organizationDetails.addressLineTwo,
      city: this.user.organizationDetails.city,
      pincode: this.user.organizationDetails.pincode,
    });
    this.isEditing = false;
    this.detailForm.disable();
  }

}
