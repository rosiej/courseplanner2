import {Component} from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Course Planner!';
  courses: Course[];

  constructor() {
    this.courses = [
      {
        academy: 'EASV',
        year: 2017,
        title: 'Angular2',
        education: 'Computer Science',
        lecturer: 'Lars Bilde'
      },
      {
        academy: 'EASV',
        year: 2017,
        title: 'ITO',
        education: 'Computer Science',
        lecturer: 'Lars Bilde'
      }
    ];
  }

}
