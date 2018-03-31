import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  result: any;
  res: any;
  alarmLoading: boolean = false;

  hours: string= '00';
  minutes: string= '00';

  first: any = 0;
  second: any = 0;
  counter: number = 0;
  
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
      if ((`${h}:${m}:${s}`)==`${this.res}:02`) {
        this.alarmLoading = false;
        alert('WAKE UP!!!!')       
      }
      this.currentTime();
    },1000);  
  }

  checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  addFirstDigit(){
    if(this.first<23){
        if (this.first<9) {
          this.first += 1;
          this.hours= '0' + this.first;        
        }else{
          this.first += 1;
          this.hours = this.first;
        }
    }else{
        this.first = 0;
        this.hours = '00';
    }
  }

  removeFirstDigit(){
    if (this.first>0) {
      if (this.first<=10) {
        this.first -= 1;
        this.hours= '0' + this.first;        
      }else{
        this.first -= 1;
        this.hours = this.first;
      }
    }else{
      this.first = 23;
      this.hours = '23';
    }
  }

  addSecondDigit(){
    if(this.second<59){
      if (this.second<9) {
        this.second += 1;
        this.minutes = '0' + this.second;
      }else{
        this.second += 1;
        this.minutes = this.second;
      }
    }else{
      this.second = 0;
      this.minutes = '00';
    }
  }

  removeSecondDigit(){
    if (this.second>0) {
      if (this.second<=10) {
        this.second -= 1;
        this.minutes= '0' + this.second;        
      }else{
        this.second -= 1;
        this.minutes = this.second;
      }
    }else{
      this.second = 59;
      this.minutes = '59';
    }
  }
 
  alarm(x,y){
    this.res = `${x}:${y}`;
    this.alarmLoading = true;
    alert(`Alarm set to ${this.res}`);
    
    
    
  }
}
