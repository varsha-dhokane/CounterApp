import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counterApp';

  countNumber = 0;

  reset(){
    this.countNumber = 0;
  }

  increase(){
  this.countNumber = this.countNumber + 1 ;
  }

  decrease(){
    this.countNumber = this.countNumber - 1;

    // if( this.countNumber < 0 ){
    //   this.countNumber = 0;
    // }
  }
}
