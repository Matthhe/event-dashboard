export interface IStudent {
  id?: number
  fullName: string
  lastName?: string
  firstName?: string
  groupName?: string
  specialty?: string
  course?: number
}

export interface IEvent {
  date: string
  category: string
  description: string
  postLink: string
  students: IStudent[]
}

export interface IStats {
  totalEvents: number
  activeChannels: number
  categories: Record<string, number>
  topStudents: { name: string; events: number }[]
}

export interface IParseResult {
  status: string
  parsedCount: number
  processedCount: number
  durationMs: number
  message: string
  events: IEvent[]
}