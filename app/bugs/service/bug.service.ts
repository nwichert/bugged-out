import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

import { Bug } from '../model/bug';

@Injectable()
export class BugService {

  private bugsDbRef = this.fire.database.ref('/bugs');

  constructor(private fire: FirebaseConfigService) { }

  // method that contains listener for child added => gets initial list of data
  getAddedBugs(): Observable<any> {
    return Observable.create(obs => {
      this.bugsDbRef.on('child_added', bug => {
        const newBug = bug.val() as Bug; // .val() creates a javascript object
        obs.next(newBug);  
      },
      err => {
        obs.throw(err);
      });
    });
  }
}