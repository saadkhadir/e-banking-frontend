import {FormBuilder, FormGroup} from '@angular/forms';
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
@Component({
  selector:'app-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']

})
export class LoginComponent implements OnInit {
  formlogin! : FormGroup;
  constructor(private fb : FormBuilder, private router : Router , private authService : AuthService) {}
  ngOnInit() :void{
    this.formlogin = this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
  }
  handleLogin(){
    let username = this.formlogin.value.username;
    let pwd = this.formlogin.value.password;
    this.authService.login(username, pwd).subscribe({
      next: data=> {
        this.authService.loadProfile(data);
      },
      error: err => {
        console.log(err);
      }
      }

    )
  }
}
