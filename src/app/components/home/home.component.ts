import { Component } from '@angular/core';
import { Movie,dataMovies } from 'src/app/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  moviesData: Movie[] = dataMovies
  typesSort:any=[
    {id:1,sort:'Ranking'},
    {id:2,sort:'Title'},
    {id:3,sort:'Release Date'}
  ];
  typesSortSelected:number=1;
  sort(event:Event|any){
    let optionSelect=event.target.value;
    console.log(optionSelect);
  }
}
