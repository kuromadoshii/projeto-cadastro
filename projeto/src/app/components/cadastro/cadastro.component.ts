import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';

  submitForm() {
    console.log('Dados enviados:', this.nome, this.email);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, por exemplo.
  }
}
