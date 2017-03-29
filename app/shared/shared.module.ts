import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ CommonModule ], // These are Modules used w/n this Shared Module
  declarations: [ ], // Modules do not go in declarations
  exports: [ CommonModule ],
  // Include anything you want shared
  // Don't use providers in the Shared Module
  // Run into issues in creating multiple instances
  // Use Core Module instead for Services - only creates a single instance
})

export class SharedModule { }