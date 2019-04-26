import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-node-editor',
  templateUrl: './nodeeditor.component.html',
  styleUrls: ['./nodeeditor.component.scss']
})
export class NodeEditorComponent {

  @Input() person;
  @Output() done = new EventEmitter();
  @Output() cancel = new EventEmitter();

  updateTitle() {
    this.done.next(this.person);
  }

  closeEditorDialog() {
    this.cancel.next(true);
  }

  getPerson() {
    return this.person;
  }

}
