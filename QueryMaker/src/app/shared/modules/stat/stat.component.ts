import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string;
  @Input() icon: string;
  @Input() count: number;
  @Input() label: string;
  @Input() data: number;
  @Input() id: string;
  @Output() actioncount = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  showControl() {
    const data = {};
    switch (this.id) {
      case 'deleteDuplicate':
        data['actioncount'] = 1;
        this.actioncount.emit(data);
    //   case 'copyData':
    //     data['actioncount'] = 2;
    //     this.actioncount.emit(data);
    //     break;
      default:
    }
  }
}
