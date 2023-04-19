import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css'],
})
export class ChildDemoComponent implements OnInit {
  @Input()
  childName: string = 'Test Child';

  messageToParent;

  @Output()
  messageEmitter = new EventEmitter();

  ngOnInit(): void {}

  sendMessageToParent(e) {
    this.messageEmitter.emit(e.target.value);
  }
}
