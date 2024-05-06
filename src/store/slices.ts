import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TNote } from "../types";
import notesData from "../data/data.json";
import { Note } from "../classes/Note";

type TInitialState = {
  notes: Note[];
};

const initialState: TInitialState = {
  notes: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    initStore(state) {
      notesData.forEach((item: TNote) => {
        state.notes.push(new Note(item));
      });
    },
  },
  selectors: {
    selectNotes: (state) => state.notes,
  },
  extraReducers: (builder) => {},
});

export const selectors = calendarSlice.selectors;
export const actions = calendarSlice.actions;

export default calendarSlice.reducer;
