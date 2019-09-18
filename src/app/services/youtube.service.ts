import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';
import { YoutubeResponse } from '../classes/youtube_response';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  // Chave para acessar API do youtube
  apiKey: string = 'AIzaSyB1Uz4R0tm9I5DZa2KMH3R7zBMQOdoUAOY';


  getVideosForChanel(querry): Observable<object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&part=snippet  &q=' + querry+'&type=video &maxResults=20';
    return this.http.get(url).pipe(map((res) => {
                                                 return res; }));
  }

  getYoutubeResponse(querry): any {

    let response: YoutubeResponse = { videos: [], nextPageToken: '' };
    this.getVideosForChanel(querry).pipe().subscribe(lista => {
      for (let element of lista['items']) {
        response.videos.push(element);
      }
      response.nextPageToken = lista['nextPageToken'];
    });
    return response;
  }
  constructor(public http: HttpClient) { }
}
