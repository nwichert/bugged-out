import { Component, OnInit } from '@angular/core';

import { BugService } from '../service/bug.service';

import { Bug } from '../model/bug';

@Component({
  moduleId: module.id,
  selector: 'bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent  implements OnInit { 

  private bugs: Bug[] = [];

  ngOnInit() {
    this.getAddedBugs();
  }

  constructor(private bugService: BugService) { }
    
      getAddedBugs() {
        this.bugService.getAddedBugs()
          .subscribe(bug => {
            this.bugs.push(bug);
          },
          err => {
            console.error('Unable to get added bug - ', err);
          });
      }
 }