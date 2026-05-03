export interface UserProfile {
  firstName: string;
  lastName: string;
  title: string;
  rate: number;
  isActive: boolean;
  // Add other profile fields as needed
}


export interface Job {
  status: string;
  jobType: string;
  scheduleDate: Date| null
}


export interface AppState {
 profile: UserProfile; // Replace 'any' with your actual profile type
 jobs: Job[]; // Replace 'any' with your actual job type
}


export const initialAppState: AppState = {
  profile: {
    firstName: '',
    lastName: '',
    title: '',
    rate: 0,
    isActive: false
  },
  jobs: []
};