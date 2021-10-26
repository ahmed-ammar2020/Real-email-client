import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';

@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailIndexComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent,
    NotfoundComponent,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    FontAwesomeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class InboxModule {}
