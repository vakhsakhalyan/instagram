import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  nativeWindow: any;
  constructor(private indexService: IndexService) {
    this.nativeWindow = window;
  }

  ngOnInit() {
  }

  OnLoad() {
    alert("aaa");
  }

  loginWithInstagram() {
    //the pop-up window size, change if you want
    var popupWidth = 700,
      popupHeight = 500,
      popupLeft = (window.screen.width - popupWidth) / 2,
      popupTop = (window.screen.height - popupHeight) / 2;
    //the url needs to point to instagram_auth.php
    var popup = this.nativeWindow.open('http://localhost:3000/instagram/api/v1/users/loginInstagram', 'Login via Instagram', 'width='+popupWidth+',height='+popupHeight+',left='+popupLeft+',top='+popupTop+'');

    this.nativeWindow.onload = function() {
        alert(3)
      };




   // window.open('https://instagram.com/oauth/authorize/?client_id=f25859b1f5724a96a800216400ee8b92&redirect_uri=http://localhost:3000/instagram/api/v1/users/login'+'&response_type=token', 'ConnectWithOAuth', 'location=0,status=0,width=800,height=400');
  }

}
