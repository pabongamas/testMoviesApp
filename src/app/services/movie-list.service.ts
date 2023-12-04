import { Injectable } from '@angular/core';
import {Movie,dataMovies} from '../models/movie.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  private storageKey = 'movieList';
  private movieList: Movie[] = [];
  constructor() {
    const storedMovieList = localStorage.getItem(this.storageKey);
    if (storedMovieList) {
      this.movieList = JSON.parse(storedMovieList);
    }
   }

  addMovie(idMovie: string): void {
    var movieFindIndex=dataMovies.findIndex(obj=>obj.id===idMovie);
    var movieFind=dataMovies[movieFindIndex];
    this.movieList.push(movieFind);
    localStorage.setItem(this.storageKey, JSON.stringify(this.movieList));
  }
  getMovies(): Movie[] {
    return this.movieList;
  }
  removeMovie(idMovie:string):void{
    var moviesFilter=this.movieList.filter(obj=>obj.id!=idMovie);
    this.movieList=moviesFilter;
    localStorage.setItem(this.storageKey, JSON.stringify(this.movieList));
  }

}
