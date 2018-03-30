import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: any;
  
  ngOnInit() {
    this.currentTime();
  }

  currentTime(){
    /* this.ora = new Date().toLocaleTimeString('en-GB', { hour: "numeric", 
    minute: "numeric"});
    console.log('function',this.ora);
    console.log(this.ora=='14:24');     */
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.result = h + ":" + m + ":" + s;
    setTimeout(()=>{   
      this.currentTime();
    },500);  
  }

  checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

 
}
