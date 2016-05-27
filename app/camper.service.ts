import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import  '../node_modules/rxjs/add/operator/toPromise';
import '../node_modules/rxjs/add/operator/map';
import {Camper} from "./camper";

@Injectable()
export class CamperService{

    private campersUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    private campers: Camper[];


    constructor(private http: Http) { }

    getCampers(): Promise<Camper[]>{
        return this.http.get(this.campersUrl)
                        .toPromise()
                        //.then(response => response.json().data)
                        .then(function(response){
                           // console.log(response);
                            response = response.json();
                            //console.log(response);
                            return response;
                        })
                        .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
