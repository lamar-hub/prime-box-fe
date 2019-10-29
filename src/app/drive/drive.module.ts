import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriveComponent} from './drive.component';
import { MyFilesComponent } from './my-files/my-files.component';
import { SharedWithMeComponent } from './shared-with-me/shared-with-me.component';
import {DriveRoutingModule} from './drive-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartsModule} from 'ng2-charts';
import { NumberToSizePipe } from './number-to-size.pipe';
import { DataTargetDirective } from './shared-with-me/data-target.directive';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchFilesPipe} from './my-files/search-files.pipe';
import {IconPipe} from './icon.pipe';
import {SortStringPipe} from './sort-string.pipe';
import {SortNumberPipe} from './sort-number.pipe';
import {SearchSharedsPipe} from './shared-with-me/search-shareds.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../shared/modal/modal.component';
import {ShareModalComponent} from '../shared/share-modal/share-modal.component';
import {ToastComponent} from '../shared/toast/toast.component';

@NgModule({
  declarations: [
    DriveComponent,
    MyFilesComponent,
    SharedWithMeComponent,
    NumberToSizePipe,
    SearchFilesPipe,
    SearchSharedsPipe,
    IconPipe,
    SortStringPipe,
    SortNumberPipe,
    DataTargetDirective,
  ],
  imports: [
    CommonModule,
    DriveRoutingModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents: [
    ModalComponent,
    ShareModalComponent,
    ToastComponent
  ],
  providers: [
    NumberToSizePipe,
    SearchFilesPipe,
    SearchSharedsPipe,
    IconPipe,
    SortStringPipe,
    SortNumberPipe
  ]
})
export class DriveModule { }
