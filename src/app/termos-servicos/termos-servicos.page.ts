import { UtilService } from './../services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-servicos',
  templateUrl: './termos-servicos.page.html',
  styleUrls: ['./termos-servicos.page.scss'],
})
export class TermosServicosPage implements OnInit {
  


  constructor(private utilService: UtilService) { }

  toolbarColor = this.utilService.getToolbarColor();
  ngOnInit() {
  }

}
