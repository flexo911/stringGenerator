import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stringGenerator';
  letters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  interval = interval(3000);
  result:string = '';
  classList = {};

  ngOnInit() {
    this.letsGenerate()
  }

  generateString() {
    this.result = '';
    let charactersLength = this.letters.length;
    for (let i = 0; i < 5; i++ ) {
      this.result += this.letters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.checkResult()
  }

  letsGenerate(){
    this.interval.subscribe( (e)=>{
      this.generateString()
    });

  }


  checkResult(){
    this.classList = '';
    if(this.palindromeCheck()){
      this.classList += ' text-danger'
    } else if(this.numberCheck()){
      this.classList += ' text-primary'
    } else if(this.zeroExist()){
      this.classList += ' d-none'
    }
  }

  palindromeCheck(){
    let tempRes = this.result.toLowerCase()
    return tempRes == tempRes.split('').reverse().join('')

  }

  numberCheck(){
    return !Number.isNaN(Number(this.result))
  }

  zeroExist(){
    let reg = /0/;
    return reg.test(this.result);
  }





}
