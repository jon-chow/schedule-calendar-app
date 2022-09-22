/**
 * @class
 * An event with a title, description, date/times, location
 */
export class Events {
  private _title: string;
  private _startDate: Date;
  private _endDate: Date;
  private _isAllDay: boolean;

  /**
   * @constructor Creates a new event with a start/end date
   * @param title the title of the event
   * @param startDate the start date/time of the event
   * @param endDate the end date/time of the event
   * @param isAllDay set true if event is all day
   */
  constructor(title: string, startDate: Date, endDate: Date, isAllDay: boolean=false) {
    this._title = title;
    this._startDate = startDate;
    this._endDate = endDate;
    this._isAllDay = isAllDay;
  }

  get Title(): string {
    return this._title;
  }
  
  set Title(title: string) {
    this._title = title;
  }

  get StartDate(): Date {
    return this._startDate;
  }

  set StartDate(startDate: Date) {
    this._startDate = startDate;
  }
  
  get EndDate(): Date {
    return this._endDate;
  }

  set EndDate(endDate: Date) {
    this._endDate = endDate;
  }

  get IsAllDay(): boolean {
    return this._isAllDay;
  }

  set IsAllDay(isAllDay: boolean) {
    this._isAllDay = isAllDay;
  }
}