import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { ManageApplicantsComponent } from './components/manage-applicants/manage-applicants.component';
import { AddJobPostComponent } from './components/add-job-post/add-job-post.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { NgOtpInputModule } from 'ng-otp-input';
import { AlertModule } from 'ngx-bootstrap/alert';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JobDetailsComponent } from './components/add-job-post/job-details/job-details.component';
import { SpinnerComponentComponent } from './components/spinner-component/spinner-component.component';
import { AllJobPostsComponent } from './components/all-job-posts/all-job-posts.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {NavBarContentComponent} from './components/nav-bar-content/nav-bar-content.component';
import {RecentJobsComponent} from './components/recent-jobs/recent-jobs.component';
import {EmpRecentJobPostsComponent} from './components/emp-recent-job-posts/emp-recent-job-posts.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseConfig } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { RouteGuard } from './auth-guard/auth-guard';

@NgModule({
  declarations: [
    SpinnerComponentComponent,
    AddJobPostComponent,
    JobDetailsComponent,
    AllJobPostsComponent,
    ManageApplicantsComponent,
    ApplicationsComponent,
    NotFoundComponent,
    ViewProfileComponent,
    NavBarContentComponent,
    RecentJobsComponent,
    EmpRecentJobPostsComponent,
    FooterComponent
  ],
  entryComponents: [
    AddJobPostComponent,
    ManageApplicantsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    NgSelectModule,
    CommonModule,
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgOtpInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  exports: [
    NotFoundComponent,
    SpinnerComponentComponent,
    ViewProfileComponent,
    MatProgressSpinnerModule,
    AlertModule,
    NgOtpInputModule,
    BsDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    IonicModule,
    ModalModule,
    HttpClientModule,
    JobDetailsComponent,
    AllJobPostsComponent,
    ManageApplicantsComponent,
    ApplicationsComponent,
    NgSelectModule,
    CollapseModule,
    NavBarContentComponent,
    RecentJobsComponent,
    EmpRecentJobPostsComponent,
    FooterComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BsModalRef,
    RouteGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
