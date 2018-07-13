import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface Text {
  text: string; span: string;
}

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  @Output() childEmitter = new EventEmitter<Text>();

  text: Text = { text: 'Angular', span: '<Трансформация>'};


  constructor() { }

  ngOnInit() {
  }
  onClickButton (e) {
    this.childEmitter.emit(this.text);
  }

}
