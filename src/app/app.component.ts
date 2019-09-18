import { Component } from '@angular/core';
import { YoutubeService } from './services/youtube.service';
import { YoutubeResponse } from './classes/youtube_response';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YoutubeFormsApi';
  youtubeResponse: YoutubeResponse;
  search = '';
  test = false;

  constructor(private youtubeService: YoutubeService) { }

  pesquisarVideos(){
    console.log("Search: ",this.search);
    this.youtubeResponse = this.youtubeService.getYoutubeResponse(this.search);
    console.log("Response: ", this.youtubeResponse);
    this.test = false;
    setTimeout(() => this.test = true, 500);

  }
  ngOnInit() {
  }
}
