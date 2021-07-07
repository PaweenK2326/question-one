import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    this.checkNumber();
  }

  onChangeEvent(event): void{
    let number = event.target.value;
    if(number < 0){
      event.target.value = 1;
    } else if(!Number.isInteger(number)){
      event.target.value = Math.round(number);
    }
    this.checkNumber();
  }

  checkNumber(): void{
    const select = document.querySelector('select');
    const input = document.querySelector('input');
    const p = document.querySelector('p');

    const value = parseInt(input.value);
  
    switch (select.value) {
      case 'isPrime':
        this.isPrime(value) ? p.innerHTML = 'true' : p.innerHTML = 'false';
        break;
      case 'isFibonacci':
        this.isFibonacci(value) ? p.innerHTML = 'true' : p.innerHTML = 'false';
        break;
    }
  }

  isPrime(number: number): boolean{
    for(let i = 2; i < number; i++)
      if(number % i === 0) return false;
    return number > 1;
  }
  isSquare(n: number): boolean{
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  isFibonacci(number: number): boolean{
    if (this.isSquare(5*(number*number)-4) || this.isSquare(5*(number*number)+4)) {
      return true;
    } else { 
      return false; 
    }
  }
}
