import { Component, OnInit } from '@angular/core';
import { Camper } from './camper';
import {CamperService} from "./camper.service";
import {Observable} from '../node_modules/rxjs/Rx';
import {Http, Response} from '@angular/http';
@Component({
    selector: 'my-app',
    template: `
    <h1 class="text-center">Free Code Camp Leadership Board</h1>
    <table class="table table-striped">
    <thead>
      <tr>
        <th class="text-center">#</th>
        <th class="text-center">Camper Name</th>
        <th class="text-center" (click)="sortByPointsInPast30Days()">Points in past 30 days</th>
        <th class="text-center" (click)="sortByAllTimePoints()">All time points</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let camper of campers; let idx = index ">
        <td class="text-center">{{idx+1}}</td>
        <td class="text-center">{{camper.username}}</td>
        <td class="text-center">{{camper.recent}}</td>
        <td class="text-center">{{camper.alltime}}</td>
      </tr>
    </tbody>
  </table>
    `,
    providers: [CamperService]
})
export class AppComponent implements OnInit{

    campers: Camper[];

    constructor(private camperService: CamperService) { }

    ngOnInit(){
        this.getCampers();
    }

    getCampers(){
        this.camperService
            .getCampers()
            .then(campers => this.campers = campers)
            .catch(error => this.error = error);
    }
}
