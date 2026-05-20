import type { IParseResult } from '../types';
import api from './axiosInstance';

export async function triggerPasre(){
    const responce = api.post<IParseResult>('/parse')
    return (await responce).data
}