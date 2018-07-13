import { Component } from '@angular/core';

interface Text {
  text: string; span: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isPressed = false;
  color = 'primary';
  textInit: Text = { text: 'Js', span: 'Expert' };
  text: Text = { text: 'Js', span: 'Expert' };
  colorChange () {
    this.isPressed = !this.isPressed;
    this.color = this.isPressed ? 'accent' : 'primary';
  }
  updateEvent(inerText) {
    this.text = inerText;
  }
  reversText () {
    this.text = this.textInit;
  }
}
