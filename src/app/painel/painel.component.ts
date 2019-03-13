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
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
  } 

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.resposta == this.rodadaFrase.frasePtBr) { 
      ++this.rodada
      this.atualizaRodada()

      this.progresso = this.progresso + (100 / this.frases.length)    

      if (this.rodada == 4) {
        alert('Você concluiu as traduções com sucesso!')
      }
    }
    else {
      this.tentativas--
      if (this.tentativas == -1)
        alert('Você perdeu todas as tentaivas!')
      else
        alert('Tradução incorreta!')
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
