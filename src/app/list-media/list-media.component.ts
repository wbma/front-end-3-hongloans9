import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  public medias: any[] = [];

  constructor(private mediaService: MediaService) { }

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

  }
}
