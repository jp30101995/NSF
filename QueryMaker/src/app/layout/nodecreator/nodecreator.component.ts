import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PersonNode} from '../personnode/personnode.interface';

@Component({
  selector: 'app-nodecreator',
  templateUrl: './nodecreator.component.html',
  styleUrls: ['./nodecreator.component.scss']
})
export class NodeCreatorComponent implements OnInit {

  @Input() parent;
  private person: PersonNode;
  @Output() done = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    this.person = {
      _id: null,
      is_root: false,
      data: {
        deletable: true,
        name: '',
        node_open: false
      },
      parent: this.parent._id,
      children: []
    };
  }

  createPerson() {
    this.done.next(this.person);
  }

  getPerson() {
    return this.person;
  }

  closeCreatorDialog() {
    this.cancel.next(true);
  }
}
