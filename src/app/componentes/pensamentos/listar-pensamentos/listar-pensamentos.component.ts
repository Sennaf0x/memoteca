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
    },
    {
      conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.",
      autoria: "Álguem",
      modelo:"modelo2"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
