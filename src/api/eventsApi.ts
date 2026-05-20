import type { IEvent } from '../types';
import api from './axiosInstance';

export async function fetchEvents(): Promise<IEvent[]>{
    const responce = await api.get<IEvent[]>('/events')
    return responce.data
}

export async function fetchEventsByStudentLastName(lastName: string): Promise<IEvent[]>{
    const responce = await api.get<IEvent[]>(`/events/by-student-name?lastName=${lastName}`)
    return responce.data
}