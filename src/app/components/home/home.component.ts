import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientiServiceService } from 'src/app/services/clienti-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clienti: Cliente[] = [];
  risposta:any;
  caricamento = true;

  constructor(private clienteSrv: ClientiServiceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.caricamento = false;
      this.clienteSrv.getClienti().subscribe(
        (data) => {
          this.risposta = data;
          this.clienti=this.risposta.content;
          console.log(this.clienti);
        },
        (error) => {
          console.error('There was an error!', error);
        }
      );
    }, 500);
    setTimeout(() => {
      this.caricamento = false;
    }, 1000);
  }
}
