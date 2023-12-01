import { Component,OnInit } from '@angular/core';
import { Movie,dataMovies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  moviesData: Movie[] = dataMovies
  typesSort:any=[
    {id:1,sort:'Ranking'},
    {id:2,sort:'Title'},
    {id:3,sort:'Release Date'}
  ];
  typesSortSelected:number=1;
  ngOnInit(): void {
      let dataLS:string|null;
      if(localStorage.getItem("watch_list_movies_app")){
         dataLS=localStorage.getItem("watch_list_movies_app");
      }else{
        localStorage.setItem("watch_list_movies_app",JSON.stringify(this.moviesData));
        dataLS=localStorage.getItem("watch_list_movies_app");
      }
      console.log(dataLS);
  }
  sort(event:Event|any){
    let optionSelect=event.target.value;
    console.log(optionSelect);
  }
}
