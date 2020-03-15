import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Router} from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  id;
  searchmov:any;
  moviedetails:[]=[];

  constructor(private activateroute:ActivatedRoute,private apiService:ApiService,private router:Router) { }


 

  ngOnInit(): void {

    this.activateroute.paramMap.subscribe((params: ParamMap) => {
      let searchid = parseInt(params.get('search'));
      this.searchmov = searchid;
      this.apiService.getMovie(this.searchmov).subscribe((data: any)=>{
        console.log(data)
        this.moviedetails = data.results;
      });
   });
  }

  OnClick(id){
    this.router.navigate(['/overview',id]);
  }

}
