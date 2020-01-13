import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FreeSlotRequest} from '../models/free-slot-request';
import {BookSlotRequest} from '../models/book-slot-request';

@Injectable({
    providedIn: 'root'
})
export class CalendarServiceService {

    constructor(private http: HttpClient) {
    }

    getFreeSlots(freeSlotsRequest: FreeSlotRequest) {
        // console.log(freeSlotsRequest);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(`http://localhost:8001/api/calendar/events/free/busy`, freeSlotsRequest, {headers});
    }

    bookAppointmet(bookSlotRequest: BookSlotRequest) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(`http://localhost:8001/api/calendar/events/create`, bookSlotRequest, {headers});
    }
}
