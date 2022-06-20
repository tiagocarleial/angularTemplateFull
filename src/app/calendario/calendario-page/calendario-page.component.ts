import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-calendario-page',
  templateUrl: './calendario-page.component.html',
  styleUrls: ['./calendario-page.component.css']
})
export class CalendarioPageComponent implements OnInit {

  title: any;
  description: any;
  modalRef?:BsModalRef;
  presentDays: number = 0;
  absentDays: number = 0;
  events: any  = [
    { title: 'Cagece', description: 'pagamento urgente', date: '2022-06-15', color: '#FF0000' },
    { title: 'Aniversário', date: '2022-06-22', color: '#0000FF' },
    { title: 'Cartão Nubank', date: '2022-06-24', color: '#FF0000' },
    { title: 'IPVA Parcelado', date: '2022-06-24', color: '#FF0000' },
  ]

  calendarOptions: CalendarOptions = {
      
      events: this.events,
      eventClick: this.handleDateClick.bind(this),

    headerToolbar: {
      start: 'dayGridMonth,dayGridWeek,dayGridDay',
      center: 'title',
      end: 'today prev,next'
      
    },

    footerToolbar: {
      right: 'prev,next'
    }
  };

  config = { 
    animated:true
  }

  @ViewChild ('template') template!: string;
  start: any;



  constructor(private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.events.forEach((e: { [x: string]: string; }) => {
      if (e["title"] == 'Present') {
        this.presentDays++;
      } else {
        this.absentDays++
      }
    });
    console.log("Present: " + this.presentDays + " Days")
    console.log("Absent: " + this.absentDays + " Days")
  }

  handleDateClick(arg:any) {
    console.log(arg);
    console.log(arg.event._def.title);
    console.log(arg.event._def.extendedProps.description);
    this.title = arg.event._def.title;
    this.description = arg.event._def.extendedProps.description;
    this.start = arg.event.start
    this.modalRef = this.modalService.show(this.template, this.config)

  }

  
 


 }

