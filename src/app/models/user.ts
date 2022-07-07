import {Patient } from './patient'

export interface User {
    userId: string;
    name: string;
    last_name: string;
    email: string;
    patient: Patient[];
}
