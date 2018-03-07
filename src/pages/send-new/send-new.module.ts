import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendNewPage } from './send-new';

@NgModule({
  declarations: [
    SendNewPage,
  ],
  imports: [
    IonicPageModule.forChild(SendNewPage),
  ],
})
export class SendNewPageModule {}
