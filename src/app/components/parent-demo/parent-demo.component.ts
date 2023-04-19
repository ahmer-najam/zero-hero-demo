import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css'],
})
export class ParentDemoComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  childName = 'Najam';
  messageFromChild = '';
  fatherName = '';

  @ViewChild('fatherName', { static: true }) customFatherName!: ElementRef;

  ngOnInit(): void {
    this.customFatherName.nativeElement.focus();
  }

  receiveData(msg) {}
}
