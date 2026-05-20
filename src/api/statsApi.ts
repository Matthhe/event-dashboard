import type { IStats } from '../types';
import api from './axiosInstance';

export async function fetchStats(): Promise<IStats> {
  const response = await api.get<IStats>('/stats');
  return response.data;
}