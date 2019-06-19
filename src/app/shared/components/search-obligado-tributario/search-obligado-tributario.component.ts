import { Component, OnInit } from '@angular/core';
import { SearchObligadoTributarioService } from '../../services/search-obligado-tributario.service';
import { ObligadoTributario } from '../../models/obligado-tributario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-obligado-tributario',
  templateUrl: './search-obligado-tributario.component.html',
  styleUrls: ['./search-obligado-tributario.component.css']
})
export class SearchObligadoTributarioComponent implements OnInit {
  resultados: ObligadoTributario[] = [];

  constructor(private service: SearchObligadoTributarioService) { }

  doSearch(query) {
    this.service.getGometa(query.value).subscribe( response => {
      // tslint:disable-next-line: no-string-literal
      response['results'].forEach(element => {
        this.resultados.push(
          new ObligadoTributario(
            element.cedula,
            element.firstname1,
            element.firstname2,
            element.lastname1,
            element.lastname2,
            element.type
            ));
      });
    });
  }

  ngOnInit() {
  }

}
