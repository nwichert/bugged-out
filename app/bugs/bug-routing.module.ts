import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      // All sub routes are "forChild()" - only use forRoot() in RootComponent - only one in the app
      // Angular looks for matching routes in order in which they are listed
      { path: '', redirectTo: 'bugs', pathMatch: 'full' },
      { path: 'bugs', component: BugListComponent },
      // Wildcard must always be at the bottom
      { path: '**', redirectTo: 'bugs' }
    ])
  ],
  exports: [RouterModule]
})
export class BugRoutingModule { }