import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  nowplaying:any;

  constructor(private apiService:ApiService,private router:Router) {}
  ngOnInit(): void {
    this.apiService.getPlaying().subscribe((data: any)=>{
      console.log(data)
      this.nowplaying = data.results;
    })
  }

  OnClick(id){
    this.router.navigate(['/overview',id]);
  }

}
