import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class PhotoService {

  private url = "http://localhost:4000/api/photos";
  private taggedUrl = "http://localhost:4000/api/photos/t";
  constructor(private http: HttpClient) {
  }

  getPhotos() {
    return this.http.get(this.url)
  }

  getPhotosWithTag(tag){
    return this.http.get(this.taggedUrl+"?tags="+tag);
  }
}


