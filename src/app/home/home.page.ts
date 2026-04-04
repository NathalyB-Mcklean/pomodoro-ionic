import { Component, OnDestroy } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
})
export class HomePage implements OnDestroy {
  isRunning = false;
  isBreak = false;
  focusTime = 25;
  breakTime = 5;
  timeLeft = 25 * 60;
  private interval: any;

  get timeDisplay(): string {
    const total = this.timeLeft ?? 0;
    const m = Math.floor(total / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  soloNumeros(event: KeyboardEvent) {
    const char = String.fromCharCode(event.charCode);
    if (!/[0-9]/.test(char)) {
      event.preventDefault();
    }
  }

  onFocusChange() {
    if (!this.focusTime || this.focusTime <= 0) {
      this.timeLeft = 0;
      return;
    }
    if (this.focusTime > 60) this.focusTime = 60;
    this.timeLeft = this.focusTime * 60;
  }

  onBreakChange() {
    if (!this.breakTime || this.breakTime <= 0) {
      this.breakTime = 0;
      return;
    }
    if (this.breakTime > 30) this.breakTime = 30;
  }

  toggle() {
    if (!this.focusTime || this.focusTime <= 0) return;
    if (!this.breakTime || this.breakTime <= 0) return;
    this.isRunning ? this.pause() : this.start();
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft === 0) {
        this.isBreak = !this.isBreak;
        this.timeLeft = this.isBreak ? this.breakTime * 60 : this.focusTime * 60;
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
    this.timeLeft = this.focusTime * 60;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}