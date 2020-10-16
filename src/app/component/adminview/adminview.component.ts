import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { log } from 'util';



    

interface Task {
id: number,
type: string,
description: string
}



@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})


export class AdminviewComponent implements OnInit {
  notificationData: any;
  public showMe = false;
  notificationList: any

  constructor( private service: NotificationServiceService) { }

  ngOnInit(): void {
    
    let response = this.service.getNotofication();
    response.subscribe(data => {

      this.assign(data)
    });


  }

  assign(data) {
    this.notificationList = data
    console.log(this.notificationList);
    



  }
  onSubmit(form) {
    let description = form.description.value
    let type = form.type.value
    this.notificationData = {
      "type": type,
      "description": description

    }
    console.log(this.notificationData);
    let response = this.service.sendNotofication(this.notificationData);
    response.subscribe(data => 
      alert(data))
      
   window.location.reload();
  }

  ClearTask(task: Task) {    
    let response = this.service.ClearNotification(task);
    response.subscribe();
    window.location.reload();
  }

}
