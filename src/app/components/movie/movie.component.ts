import { Component, Input, Output,OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie | undefined;
  @Input() index: number = 0;
  inWatchList=false;
  constructor(private movieService: MovieListService) {}
  ngOnInit(): void {
    var moviesInitialWatchList=this.movieService.getMovies();
    var inWatchList=moviesInitialWatchList.filter(obj=>obj.id==this.movie?.id);
    if(inWatchList.length>0){
      this.inWatchList=true;
    }
  }
  stateWatchList(idMovie: string | undefined) {
    if (idMovie !== undefined) {
      var moviesInWatchList=this.movieService.getMovies();
      var existMovieInWatchList=moviesInWatchList.filter(obj=>obj.id==idMovie);
      if(!(existMovieInWatchList.length>0)){
        this.movieService.addMovie(idMovie);
        this.inWatchList=true;
      }else{
        this.inWatchList=false;
        this.movieService.removeMovie(idMovie);
      }
    }
  }
  // this.searchServiceService.setDataAlbumsSearch(this.dataAlbums);
}
