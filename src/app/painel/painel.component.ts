import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = Frases;
  public instrucao: string = 'Traduza a frase:'
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() { 
    this.rodadaFrase = this.frases[this.rodada] 
    console.log(this.rodadaFrase)

  } 

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificarResposta(): void {
    if (this.resposta == this.rodadaFrase.frasePtBr) { 
      alert('Tradução correta!')
      this.rodadaFrase = this.frases[++this.rodada]

      this.progresso = this.progresso + (100 / this.frases.length)    
      console.log(this.progresso)
    }
    else {
      alert('Tradução incorreta!')
    }
  }
}
