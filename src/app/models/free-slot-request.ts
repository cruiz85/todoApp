export class FreeSlotRequest {
    timeMin: string;
    timeZone: string;
    groupExpansionMax: number;
    calendarExpansionMax: number;
    items: string[];

    constructor(timeMin, items) {
        this.timeMin = timeMin;
        this.items = items;
        this.timeZone = 'CET';
        this.calendarExpansionMax = 10;
        this.groupExpansionMax = 0;
    }
}
