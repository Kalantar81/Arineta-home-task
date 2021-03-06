import { Component, OnInit } from '@angular/core';
import { CityPhotosService } from 'src/app/services/city-photos.service';

import { createClient } from 'pexels/dist/main';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less']
})
export class ContainerComponent implements OnInit {

  constructor(private cityPhotosService: CityPhotosService) { }

  ngOnInit(): void {
    this.cityPhotosService.getPhotos();
  }

}
