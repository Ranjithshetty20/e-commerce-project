import { Component, OnInit } from '@angular/core';
import { homeCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css']
})
export class MainCarouselComponent implements OnInit {

  currentSlide=0;
  carouselData=homeCarouselData;
  interval: any;

  


  ngOnInit(): void {

    this.autoPlay();
    
 
  }


  autoPlay(){

    setInterval(()=>{
      this.nextSlide();
    },2000);
  }

  nextSlide(){
    this.currentSlide=(this.currentSlide+1)% this.carouselData.length;
  }

   preveSlide()
   {
    this.currentSlide=(this.currentSlide-1)%this.carouselData.length;
   }

}
