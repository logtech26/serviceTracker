import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectApp = createFeatureSelector<AppState>('app');

export const selectJobs = createSelector(
  selectApp,
  (state: AppState) => state.jobs
);

export const selectProfile = createSelector(
  selectApp,
  (state: AppState) => state.profile
);