import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  dataBanks: any;

  constructor(private http: HttpClient, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.findTurret(params.get('id'));
    });
  }

  findTurret(turretNumber:any){
    console.log(turretNumber);
    this.http.get(`http://localhost:4200/internal-defenses/${turretNumber}`)
    .subscribe((response)=>{
      console.log(response);
      this.dataBanks = response;
    })
  }

}
