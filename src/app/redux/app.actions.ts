import { createAction, props } from '@ngrx/store';
import { Job, UserProfile } from './app.state';

export const saveProfile = createAction(
  '[Profile] Save',
  props<{ profile: UserProfile }>(),
);
export const addJob = createAction('[Job] Add', props<{ job: Job }>());
