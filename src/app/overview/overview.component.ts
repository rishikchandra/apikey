import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  
  movid:any;
  overview:any;
  constructor(private apiService:ApiService,private activateroute :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.movid = id;
      this.apiService.getId(this.movid).subscribe((data: any)=>{
        console.log(data)
        this.overview = data;
      });
   });
  }

  gotoHome(){
    let selectedId = this.movid ? this.movid : null;
    this.router.navigate(['/default',{movid: selectedId}]);

  }

}
