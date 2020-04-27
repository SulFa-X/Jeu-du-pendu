import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { dictionary } from './dictionary';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  dico: Array<string>;
  word: string;
  letters: Array<string>;
  try: string[]=[]
  
  constructor() {
    this.dico = dictionary;

    this.letters = [
      'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ];

    
   }

  ngOnInit(): void {
    this.start();

  }

  onClick(letter: string) {
    this.try.push(letter);
  }

  devine(): string {
    const wordLetters = this.word.split('');
    const wordDevine = wordLetters.map(l => this.try.includes(l) ? l : '_ ');
    return wordDevine.join('');
  }

  end(): boolean {
    return ! this.devine().includes('_');
  }

  isTried(letter: string): boolean {
    return this.try.includes(letter);
  }

  start(): void{
    this.try = [];
    this.word=this.dico[Math.floor(Math.random() * this.dico.length)].toUpperCase();
  }

  isError(letter): boolean{
    return this.isTried(letter) && !this.word.includes(letter);
  }

}
