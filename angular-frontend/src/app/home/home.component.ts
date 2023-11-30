import { Component, OnInit } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  menJeans:any;
  womenGouns:any;
  lehangacholi:any;
  MenKurta:any;
  shoes:any;


  ngOnInit(){
    
    console.log("hello");
    this.menJeans=menJeans.slice(0,5);
    this.womenGouns=gounsPage1.slice(0,5);
    this.lehangacholi=lehngacholiPage2.slice(0,5);
    this.MenKurta=mens_kurta.slice(0,5);
    this.shoes=mensShoesPage1.slice(0,5);

  }

}
