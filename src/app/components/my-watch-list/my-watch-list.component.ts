import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-my-watch-list',
  templateUrl: './my-watch-list.component.html',
  styleUrls: ['./my-watch-list.component.css']
})
export class MyWatchListComponent implements OnInit {
  myWatchList: Movie[] =[]
  constructor(private listServiceMovie:MovieListService){
  }
  ngOnInit(): void {
      this.myWatchList=this.listServiceMovie.getMovies();
  }
 
}
