import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imagensUrl:string[] = [];
  
  constructor() {}

  async takePicture(source: "camera" | "library") {
    const image = await Camera.getPhoto({
      quality: 50,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: source === "library" ? CameraSource.Photos : CameraSource.Camera
    });

    if (image.dataUrl === undefined){
      return;
    }

    this.imagensUrl.push(image.dataUrl.toString());
  }
}
