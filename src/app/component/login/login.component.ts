import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    this.userName = form.value.userName
    this.password = form.value.password

    this.validate(this.userName, this.password);
  }
  validate(userName, password) {

    if (userName === 'admin' && password=='admin') {
      this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);

      this.router.navigate(['/adminview'])
    }
    else {
      alert("Please enter valid username/password")
    }
  }


}
