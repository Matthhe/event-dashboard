import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import type { IEvent, IStats } from '../types'
import { fetchEvents } from '../api/eventsApi'
import { fetchStats } from '../api/statsApi'
const useDashboard = () => {
  const [stats, setStats] = useState<IStats | null>(null);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

   const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [statsData, eventsData] = await Promise.all([
        fetchStats(),
        fetchEvents(),
      ]);
      setStats(statsData);
      setEvents(eventsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки данных');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { stats, events, loading, error, refreshData: loadData };
  

}

export default useDashboard