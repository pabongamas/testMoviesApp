import { Gender } from "./genre.model";
export interface Movie {
    id: string;
    title: string;
    description: string;
    rating:number;
    duration:string;
    gender:Gender[];
    releaseDate:Date;
    trailerLink:string;
    img:string;
  }

export const dataMovies =[{
      id: '1',
      title: 'Tenet',
      description:
        'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold insomething beyond real time.',
      rating: 7.8,
      duration: '2h 30 min',
      gender: [{ id: '1', name: 'Action' },{id:'2',name:'Sci-Fi'}],
      releaseDate: new Date("2020-09-03"),
      trailerLink: 'https://www.youtube.com/embed/LdOM0x0XDMo',
      img:'../assets/Tenet.png'
    },
    {
      id: '2',
      title: 'Spider-Man: Into the Spider-Verse',
      description:' Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spiderpowered individuals from other dimensions to stop a threat for all realities.',
      rating: 8.4,
      duration: '1h 57min',
      gender: [{ id: '1', name: 'Action' },{id:'2',name:'Animation'},{id:'3',name:'Adventure'}],
      releaseDate:new Date("2020-09-03"),
      trailerLink: 'https://www.youtube.com/embed/tg52up16eq0',
      img:'../assets/Spider Man.png'
    },
    {
      id: '3',
      title: 'Knives Out',
      description:
        'A detective investigates the death of a patriarch of an eccentric, combative family',
      rating: 7.9,
      duration: '2h 10min',
      gender: [{ id: '1', name: 'Comedy' },{id:'2',name:'Crime'},{id:'3',name:'Drama'}],
      releaseDate: new Date("2019-11-27"),
      trailerLink: 'https://www.youtube.com/embed/qGqiHJTsRkQ',
      img:'../assets/Knives Out.png'
    },
    {
      id: '4',
      title: 'Guardians of the Galaxy',
      description:
        'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe',
      rating: 8.0,
      duration: '2h 1min',
      gender: [{ id: '1', name: 'Action' },{id:'2',name:'Adventure'},{id:'3',name:'Comedy'}],
      releaseDate:new Date("2014-08-01"),
      trailerLink: 'https://www.youtube.com/embed/96cjJhvlMA',
      img:'../assets/Guardians of The Galaxy.png'
    },
    {
      id: '5',
      title: 'Avengers: Age of Ultron',
      description:"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
      rating: 7.3,
      duration: '2h 21min',
      gender: [{ id: '1', name: 'action' },{id:'2',name:'Adventure'},{id:'2',name:'Sci-Fi'}],
      releaseDate:new Date("2015-05-01"),
      trailerLink: 'https://www.youtube.com/embed/tmeOjFno6Do',
      img:'../assets/Avengers.png'
    },
    
  ];