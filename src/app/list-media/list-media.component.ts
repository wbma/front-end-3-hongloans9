import { DigitransitService } from './../services/digitransit.service';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  public medias: any[] = [];
  public stopArray: any[] = [];

  constructor(private mediaService: MediaService, private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe((data: any) => {
      console.log(data);
      this.medias = data;
      this.medias.forEach(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tns320.png';
        media.thumbnail =  thumbName;
        console.log(media);
      });

    });

    this.digitransitService.getRoutes('Kamppi').subscribe((data: any) =>{
      console.log(data['data'].stops);
      this.stopArray = data['data'].stops;
    });
  }
}
