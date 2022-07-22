import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddAgenceComponent } from '../add-agence/add-agence.component';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  agences!: {}[];
  columns!: {}[];

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    this.getAgences();
    this.getColumns();
  }

  new(): void {
    const ref = this.dialogService.open(AddAgenceComponent, {
      header: "Nouvelle Agence",
      width: "70%"
    })
  }

  getAgences(): void {
    this.agences = [
      {
        id: '1',
        code: '01000',
        nom: 'Hyperion',
        status: 'Ouvert'
      },
      {
        id: '2',
        code: '01200',
        nom: 'Elios',
        status: 'Ouvert'
      },
      {
        id: '3',
        code: '02933',
        nom: 'Orabank',
        status: 'Fermee'
      },
      {
        id: '4',
        code: '03000',
        nom: 'UBA',
        status: 'Ouvert'
      }
    ]
  } 

  getColumns(): void {
    this.columns = [
      {
        field: "id",
        header: "Identifiant"
      },
      {
        field: "code",
        header: "Code agence"
      },
      {
        field: "nom",
        header: "Nom de l'agence"
      },
      {
        field: "status",
        header: "Statut"
      }
    ]
  }
}
