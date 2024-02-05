import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

interface Option {
  name: string;
  active: boolean;
  actions: any;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './main.html',
  imports: [TitleCasePipe],
})
export class App {
  name = 'Angular';

  options = [
    {
      name: 'stand',
      active: true,
      actions: ['look around', 'bend the knees', 'boring stuff'],
    },
    { name: 'walk', active: false, actions: [] },
    { name: 'jog', active: false, actions: [] },
    { name: 'run', active: false, actions: [] },
    { name: 'fly', active: false, actions: [] },
  ];

  action(option: Option) {
    option.active = !option.active;
    console.log(option);
  }
}

bootstrapApplication(App);
