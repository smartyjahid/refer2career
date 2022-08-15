import { DbOperation } from './../../shared/models/dbOperation';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserRole } from './../../shared/models/enums';
import { OrganizationsService } from './../../shared/services/organizations.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { ToastService } from 'src/app/shared/services/toast.service';


@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss'],
})
export class AddOrganizationComponent implements OnInit {

  user: any;
  organization: any = {};
  currrentDocIndex: any = undefined;

  documentsArray: any[] = [];

  message: any = '';

  isEditing = false;
  organizationLogo: any;
  organizationLogoData: any;
  userPhoto: any;
  userPhotoData: any;

  detailForm: FormGroup;

  modal2: BsModalRef;

  documentType = '';
  frontPhoto: any;
  frontPhotoData: any;
  backPhoto: any;
  backPhotoData: any;
  documentFormSubmitted = false;
  isServiceRunning = false;

  constructor(
    public modalRef: BsModalRef,
    private menu: MenuController,
    private organizationService: OrganizationsService,
    private toastService: ToastService,
    private modalService: BsModalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initializeForm();
    if (this.organizationService.organization !== undefined) {
      this.organization = this.organizationService.organization;
      this.initializeDetail();
    }
  }

  initializeForm() {
    this.detailForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      alternateNumber: new FormControl('', [Validators.required]),
      organizationName: new FormControl('', [Validators.required]),
      organizationEmail: new FormControl('',
        [Validators.required, Validators.email]),
      organizationMobile: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      field: new FormControl('', [Validators.required]),
      addressLineOne: new FormControl('', [Validators.required]),
      addressLineTwo: new FormControl('',
        [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    });
  }

  initializeDetail() {
    this.detailForm.patchValue({
      name: this.organization.personalDetails.name,
      mobile: this.organization.personalDetails.mobile,
      email: this.organization.personalDetails.email,
      alternateNumber: this.organization.personalDetails.alternateNumber,
      organizationName: this.organization.organizationDetails.organizationName,
      organizationEmail: this.organization.organizationDetails.organizationEmail,
      field: this.organization.organizationDetails.organizationField,
      organizationMobile: this.organization.organizationDetails.organizationMobile,
      addressLineOne: this.organization.organizationDetails.addressLineOne,
      addressLineTwo: this.organization.organizationDetails.addressLineTwo,
      city: this.organization.organizationDetails.city,
      pincode: this.organization.organizationDetails.pincode,
    });
    this.documentsArray = this.organization.organizationDetails.docs;
    this.organizationLogo = this.organization.organizationDetails.logo;
    this.userPhoto = this.organization.personalDetails.photo;
  }


  close() {
    this.modalRef.hide();
  }

  addDocument(template: any) {
    this.modal2 = this.modalService.show(template, {
      id: 2, class: 'fit-width modal-dialog-centered'
      , ignoreBackdropClick: true, animated: true
    });
  }

  save() {
    this.message = '';
    this.detailForm.markAllAsTouched();
    if (this.detailForm.valid) {
      this.isServiceRunning = true;
      const details: any = {
        email: this.detailForm.get('organizationEmail').value,
        password: this.detailForm.get('organizationMobile').value,
        role: UserRole.EMPLOYER,
        verified: true,
        time: new Date(),
        personalDetails: {
          email: this.detailForm.get('email').value,
          name: this.detailForm.get('name').value,
          mobile: this.detailForm.get('mobile').value,
          alternateNumber: this.detailForm.get('alternateNumber').value,
          photo: this.userPhoto,
        },
        organizationDetails: {
          organizationName: this.detailForm.get('organizationName').value,
          organizationField: this.detailForm.get('field').value,
          organizationEmail: this.detailForm.get('organizationEmail').value,
          organizationMobile: this.detailForm.get('organizationMobile').value,
          addressLineOne: this.detailForm.get('addressLineOne').value,
          addressLineTwo: this.detailForm.get('addressLineTwo').value,
          city: this.detailForm.get('city').value,
          pincode: this.detailForm.get('pincode').value,
          logo: this.organizationLogo,
          docs: this.documentsArray
        }
      };
      if (this.organization) {
        details.lastUpdated = new Date();
        const db: DbOperation = {
          collection: 'users',
          data: details,
          query: { _id: this.organization._id }
        };
        this.authService.update(db).then((data: any) => {
          if (data.data) {
            this.toastService.showToast('Organization updated Successfully!');
            this.modalService.hide();
            setTimeout(time => {
              window.location.reload();
            }, 2000);
          }
          else { this.toastService.showToast('Something went wrong!', 'bg-danger'); }
        });
      }
      else {
        this.organizationService.addOrganization(details).then((data: any) => {
          this.isServiceRunning = false;
          if (data.data) {
            this.isEditing = false;
            this.detailForm.reset();
            this.userPhoto = undefined;
            this.organizationLogo = undefined;
            this.documentsArray = [];
            this.toastService.showToast('Organization Added Successfully!');
            setTimeout(time => {
              window.location.reload();
            }, 3000);
          }
          else if (data.error) {
            this.message = data.error;
          }
          else { this.toastService.showToast('Something went wrong!', 'bg-danger'); }
        });
      }
    }
  }

  cancel() {
    this.documentFormSubmitted = false;
    this.frontPhoto = undefined;
    this.backPhoto = undefined;
    this.documentType = '';
    this.currrentDocIndex = undefined;
    this.modalService.hide(2);
  }

  uploadImage(event: any, id = 0) {
    const reader: FileReader = new FileReader();
    reader.onload = (file: any) => {
      if (id === 0) {
        this.organizationLogo = file.target.result;
      }
      else if (id === 1) {
        this.userPhoto = file.target.result;
      }
      else if (id === 2) {
        this.frontPhoto = file.target.result;
      }
      else if (id === 3) {
        this.backPhoto = file.target.result;
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    if (id === 0) {
      this.organizationLogoData = event.target.files[0];
    }
    else if (id === 1) {
      this.userPhotoData = event.target.files[0];
    }
    else if (id === 1) {
      this.frontPhotoData = event.target.files[0];
    }
    else if (id === 1) {
      this.backPhotoData = event.target.files[0];
    }
  }

  addDoc() {
    this.documentFormSubmitted = true;
    if (this.documentType && this.frontPhoto) {
      const doc = {
        type: this.documentType,
        frontPhoto: this.frontPhoto,
        backPhoto: this.backPhoto
      };
      if (this.currrentDocIndex === undefined) {
        this.documentsArray.push(doc);
      }
      else {
        this.documentsArray[this.currrentDocIndex] = doc;
      }

      this.cancel();
    }
  }

  deleteDocument(index: any) {
    this.documentsArray.splice(index, 1);
  }

  editDocument(doc: any, index: any, template: any) {
    this.currrentDocIndex = index;
    this.documentType = doc.type;
    this.frontPhoto = doc.frontPhoto;
    this.backPhoto = doc.backPhoto;
    this.addDocument(template);
  }

}
