// Modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

//Component
import { BugListComponent } from './bug-list/bug-list.component';

//Service
import { BugService } from './service/bug.service'

@NgModule({
  imports: [ 
    SharedModule,
    BugRoutingModule
  ],
  declarations: [
    BugListComponent
  ],
  exports: [ ],
  providers: [   // these are services
    BugService
  ], 
})

export class BugModule { }