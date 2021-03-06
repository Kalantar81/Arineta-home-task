import { Injectable } from '@angular/core';
import { createClient } from 'pexels';
import { Observable } from 'rxjs';

const client = createClient('563492ad6f9170000100000122bbd5b61dd3428b85b45b0b0053b30a');
const query = 'Nature';

@Injectable({
  providedIn: 'root'
})
export class CityPhotosService {

  constructor() { }

  public getPhotos(): any {
    client.photos.search({ query, per_page: 1 })
      .then(photos => {
        console.log(photos);
      });
  }
}
