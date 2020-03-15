import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapi';



  constructor(private http : HttpClient,private apiService: ApiService,private router:Router) { }
  search='';
  
 
  
  ngOnInit(): void {
  }
  
  onClick = () => {
    this.router.navigate(['/searchmovie',this.search]);  
    this.search=''; 
  }

}
