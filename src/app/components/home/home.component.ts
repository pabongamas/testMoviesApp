import { Component,OnInit } from '@angular/core';
import { Movie,dataMovies } from 'src/app/models/movie.model';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private serviceMovie:MovieListService){
  }
  moviesData: Movie[] = dataMovies;
  myWatchList: Movie[] =[]
  typesSort:any=[
    {id:1,sort:'Ranking'},
    {id:2,sort:'Title'},
    {id:3,sort:'Release Date'}
  ];
  isAsc=true;
  textoOrder: string = this.isAsc?'Order Asc':'Order Desc'
  typesSortSelected:number=1;
  ngOnInit(): void {
      let dataLS:string|null;
      if(localStorage.getItem("watch_list_movies_app")){
         dataLS=localStorage.getItem("watch_list_movies_app");
      }else{
        localStorage.setItem("watch_list_movies_app",JSON.stringify(this.moviesData));
        dataLS=localStorage.getItem("watch_list_movies_app");
      }
      if(dataLS!==null){
          this.sortDataMovie(1);
      }
     this.myWatchList=this.serviceMovie.getMovies();
  }
  sort(event:Event|any){
    let optionSelect=event.target.value;
    this.sortDataMovie(optionSelect);
  }
  sortDataMovie(typeSort:number){
    this.isAsc=true;
    if(typeSort==1){
      this.moviesData=this.moviesData.sort((a,b)=>b.rating-a.rating);
    }else if(typeSort==2){
      this.moviesData=this.moviesData.sort((a, b) => a.title.localeCompare(b.title));
    }else if(typeSort==3){
      this.moviesData=this.moviesData.sort((a, b) =>  a.releaseDate.getTime() - b.releaseDate.getTime());
    }
  }
  orderAscDesc(){
    this.isAsc=!this.isAsc;
    this.moviesData.reverse();
  }
}
