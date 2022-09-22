/**
 * @class
 * An event with a title, description, date/times, location
 */
export class Events {
  private _title: string;
  private _startDate: Date | null;
  private _endDate: Date | null;
  private _isAllDay: boolean;

  /**
   * @constructor Creates a new event with a start/end date
   * @param title the title of the event
   * @param startDate the start date/time of the event
   * @param endDate the end date/time of the event
   * @param isAllDay set true if event is all day
   */
  constructor(title: string, startDate: Date | null, endDate: Date | null, isAllDay: boolean=false) {
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

  get StartDate(): Date | null {
    return this._startDate;
  }

  set StartDate(startDate: Date | null) {
    this._startDate = startDate;
  }
  
  get EndDate(): Date | null {
    return this._endDate;
  }

  set EndDate(endDate: Date | null) {
    this._endDate = endDate;
  }

  get IsAllDay(): boolean {
    return this._isAllDay;
  }

  set IsAllDay(isAllDay: boolean) {
    this._isAllDay = isAllDay;
  }
}