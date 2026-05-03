import { createReducer, on } from "@ngrx/store";
import { initialAppState } from "./app.state";

import * as Actions from "./app.actions";

export const appReducer = createReducer(
  initialAppState,

  on(Actions.saveProfile, (state, { profile }) => ({
    ...state,
    profile,
  })),

  on(Actions.addJob, (state, { job }) => ({
    ...state,
    jobs: [...state.jobs, job],
  }))
);