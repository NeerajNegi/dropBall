import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalBalls = 0;
  pinkBalls = 0;
  greenBalls = 0;
  blueBalls = 0;
  purpleBalls = 0;

  pink = '#FFC0CB';
  green = '#008000';
  blue = '#00FFFF';
  purple = '#9400D3';

  balls = [];

  constructor() {}



  addNewBall(): void {
    this.totalBalls++;
    if (this.totalBalls % 15 === 0 && this.totalBalls !== 0) {
      this.purpleBalls++;
      this.balls.push(this.purple);
    } else if (this.totalBalls % 5 === 0 && this.totalBalls !== 0) {
      this.blueBalls++;
      this.balls.push(this.blue);
    } else if (this.totalBalls % 3 === 0 && this.totalBalls !== 0) {
      this.greenBalls++;
      this.balls.push(this.green);
    } else {
      this.pinkBalls++;
      this.balls.push(this.pink);
    }
  }

  reset(): void {
    this.totalBalls = 0;
    this.pinkBalls = 0;
    this.purpleBalls = 0;
    this.greenBalls = 0;
    this.blueBalls = 0;
  }
}
