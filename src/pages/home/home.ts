import { Component } from '@angular/core';
import {Camera} from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public base64Image: string;

  constructor() {}
  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
    }
}
