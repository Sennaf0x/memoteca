import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: "Passo informações para o componente filho",
      autoria: "Pai",
      modelo:"modelo1"
    },
    {
      conteudo: "Preciso do @Input para passar informações",
      autoria: "Filho",
      modelo:"modelo3"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
