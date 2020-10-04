import { Component, OnInit } from '@angular/core';
import { ValorbitService } from '../valorbit.service';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-valorbit',
  templateUrl: './valorbit.component.html',
  styleUrls: ['./valorbit.component.css']
})
export class ValorbitComponent implements OnInit {

  constructor( public timer: TimerService, public valorbitService: ValorbitService) { 
    this.timer.start(1000);
  }


  ngOnInit() {
    this.update();
  }

  getCurrentPrice(){
    return this.valorbitService.currentPrice;
  }

  update() {
    this.valorbitService.update();
  }
}