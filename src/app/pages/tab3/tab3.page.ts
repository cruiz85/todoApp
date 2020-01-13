import {Component, OnInit} from '@angular/core';
import {CalendarServiceService} from '../../services/calendar-service.service';
import {FreeSlotRequest} from '../../models/free-slot-request';
import {FreeSlotResponse} from '../../models/free-slot-response';
import {BookSlotRequest} from '../../models/book-slot-request';
import * as moment from 'moment';
import {Moment} from 'moment';

@Component({
    selector: 'app-tab3',
    templateUrl: './tab3.page.html',
    styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

    freeSlots: FreeSlotResponse[];

    myDate = moment().format('DD-MM-YYYY');

    disabledDates: Date[] = [
        new Date(1545911005644),
        new Date(),
        new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
        new Date('Wednesday, December 26, 2018'), // Works with any valid Date formats like long format
        new Date('12-14-2018'), // Short format
    ];
    datePickerObj: any = {
        inputDate: new Date('2018-08-10'), // default new Date()
        fromDate: new Date('2016-12-08'), // default null
        toDate: new Date('2019-12-28'), // default null
        showTodayButton: false, // default true
        closeOnSelect: true, // default false
        disableWeekDays: [6], // default []
        mondayFirst: true, // default false
        setLabel: 'S',  // default 'Set'
        todayLabel: 'T', // default 'Today'
        closeLabel: 'C', // default 'Close'
        // disabledDates = disabledDates, // default []
        titleLabel: 'Select a Date', // default null
        monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        weeksList: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        dateFormat: 'DD-MM-YYYY', // default DD MMM YYYY
        clearButton: false, // default true
        momentLocale: 'pt-BR', // Default 'en-US'
        yearInAscending: true, // Default false
        btnCloseSetInReverse: true, // Default false
        btnProperties: {
            expand: 'block', // Default 'block'
            fill: '', // Default 'solid'
            size: '', // Default 'default'
            disabled: '', // Default false
            strong: '', // Default false
            color: '#ee88bf' // Default ''
        },
        arrowNextPrev: {
            nextArrowSrc: 'assets/images/arrow_right.svg',
            prevArrowSrc: 'assets/images/arrow_left.svg'
        }, // This object supports only SVG files.
        highlightedDates: [
            {date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff'},
            {date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff'}
        ], // Default [],
        isSundayHighlighted: {
            fontColor: '#ee88bf' // Default null
        } // Default {}
    };
    calendarTitle = 'Select a Date';
    items: string[] = ['cruiz85@gmail.com'];

    constructor(private calendarClient: CalendarServiceService) {

        // '2019-11-4T08:00:00'
        // 2019-11-4T08:00:00'
        console.log('iitializing');
        // this.calendarClient.getFreeSlots(new FreeSlotRequest(new Date(), this.items)).subscribe((resp: FreeSlotResponse[]) => {
        //     // console.log('chao', resp);
        //     this.freeSlots = resp;
        // }, (serviceError) => {
        //     // console.log(error)
        //     console.log(serviceError.message);
        // });
    }

    ngOnInit() {

    }

    bookAppointmet(freeSlot: FreeSlotResponse) {
        const bookSlotRequest: BookSlotRequest = new BookSlotRequest(freeSlot.start, freeSlot.end, 'title app', 'description app', 'cruiz85@gmail.com');
        this.calendarClient.bookAppointmet(bookSlotRequest).subscribe(resp => {
            console.log(resp);
        });
    }


    // getDate(myDate: Date) {
    //     console.log(myDate);
    // }
    getDate($event: CustomEvent) {
        this.calendarTitle = '';
        // const fecha: string = $event.detail.value;
        // const fechaDate: String = Date.parse(fecha).toString();
        // console.log(fechaDate.format('dd-mm-yyyy'));
        console.log(moment($event.detail.value, 'dd-mm-yyyy', true).toString());
        // console.log($event.detail.value);
        // this.calendarClient.getFreeSlots(new FreeSlotRequest(new Date($event.detail.value), this.items)).subscribe((resp: FreeSlotResponse[]) => {
        //     this.freeSlots = resp;
        //     // console.log(this.freeSlots);
        // }, (serviceError) => {
        //     console.log(serviceError.message);
        // });
    }
}
