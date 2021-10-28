import { Component, OnInit } from '@angular/core';
import  * as SwaggerUI  from 'swagger-ui';
@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.scss']
})
export class SwaggerUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    SwaggerUI({
      domNode: document.getElementById('swagger-ui-item'),
      url: 'assets/yamls/openapi.yaml'
    });
  }

}
