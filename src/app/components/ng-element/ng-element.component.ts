import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-ng-element',
  templateUrl: './ng-element.component.html',
  styleUrls: ['./ng-element.component.scss']
})
export class NgElementComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DirectivesComponent);
  }

}
