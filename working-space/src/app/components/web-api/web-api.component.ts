import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Http, Request } from '@angular/http';



@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.css']
})
export class WebApiComponent implements OnInit {
  
  @Output()
  createPicture = new EventEmitter<any[]>();

  public webcam //will be populated by ack-webcam [(ref)]
  public base64
  pictures: any[] = [];

  options = {
    audio: false,
    video: true,
    width: 400,
    height: 400,
    cameraType: 'front'
  };

  constructor(public http: Http) { }

  genBase64() {
    this.webcam.getBase64()
      .then(base => this.base64 = base)
      //.then(out => console.log(this.base64))
      .then(out => { 
        //let splitBase64 = this.base64.split(",");
        this.pictures[0] = this.base64;
        this.createPicture.emit(this.pictures);
      })
      .catch(e => console.error(e))
  }

  genPostData() {
    this.webcam.captureAsFormData({ fileName: 'file.jpg' })
      .then(formData => this.postFormData(formData))
      .catch(e => console.error(e))
  }
  
  postFormData(formData) {
    const config = {
      method: "post",
      url: "",
      body: formData
    }

    //const request = new Request(config)
    console.log(formData)
    //return this.http.request(request)
  }

  onCamError(err) { }

  onCamSuccess() { }

  ngOnInit() {
  }



}
