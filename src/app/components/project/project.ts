import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  ngAfterViewInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
