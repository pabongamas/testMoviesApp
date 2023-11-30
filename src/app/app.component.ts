import { Component } from '@angular/core';
import { Movie } from './models/movie.model';
import { Gender } from './models/genre.model';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MoviesApp';
  
}
