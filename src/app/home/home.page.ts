import { Component, OnDestroy } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule],
})
export class HomePage implements OnDestroy {
  isRunning = false;
  isBreak = false;
  timeLeft = 25 * 60;
  private interval: any;

  get timeDisplay(): string {
    const m = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
    const s = (this.timeLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  toggle() {
    this.isRunning ? this.pause() : this.start();
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.isBreak = !this.isBreak;
        this.timeLeft = this.isBreak ? 5 * 60 : 25 * 60;
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  reset() {
    this.pause();
    this.isBreak = false;
    this.timeLeft = 25 * 60;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}