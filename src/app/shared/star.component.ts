import { Component, OnInit, Input, OnChanges,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
@Input() rating:number
starWidth:number
@Output() notify:EventEmitter<string> = new EventEmitter<string>()
 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.starWidth =this.rating * 86/5
    console.log(this.starWidth)
  }

  onClick():void{
    //this.notify.emit('the rating :' + this.rating + ' was clicked')

    this.notify.emit(`the rating ${this.rating} was clicked`)
  }

}
