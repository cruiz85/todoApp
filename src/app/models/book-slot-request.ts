export class BookSlotRequest {
    startDateEvent: Date;
    endDateEvent: Date;
    title: string;
    description: string;
    calendarId: string;


    constructor(startDateEvent: Date, endDateEvent: Date, title: string, description: string, calendarId: string) {
        this.startDateEvent = startDateEvent;
        this.endDateEvent = endDateEvent;
        this.title = title;
        this.description = description;
        this.calendarId = calendarId;
    }
}
