import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Movie,dataMovies } from 'src/app/models/movie.model'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
;

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  movieId:string='';
  movie:Movie|undefined=undefined;
  videoUrl: SafeResourceUrl|null=null;
  constructor(private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params=>{
      this.movieId=params['id'];
      this.movie=dataMovies.find(o=>o.id===this.movieId);
      if (this.movie && this.movie.trailerLink) {
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie?.trailerLink);
      }
    });
  }


}
