import { TNote } from "../../types";

export class Note {
  private _dayNotes: string[];
  private _nightNotes: string[];
  private _date: string;

  constructor(note: TNote) {
    this._dayNotes = note.dayNotes;
    this._nightNotes = note.nightNotes;
    this._date = note.date;
  }

  get dayNotes() {
    return this._dayNotes;
  }

  get nightNotes() {
    return this._nightNotes;
  }

  get date() {
    return this._date;
  }
}
