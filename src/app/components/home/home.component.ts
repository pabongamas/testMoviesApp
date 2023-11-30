import { Component } from '@angular/core';
import { Movie,dataMovies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesData: Movie[] = dataMovies
}
