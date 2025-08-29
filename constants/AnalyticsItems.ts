import moment from "moment";

export type EventItem = {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
};

export const ANALYTICS_ITEMS: EventItem[] = [
  {
    id: 1,
    title: "API Integration",
    startDate: moment().set({ hour: 9, minute: 0 }).toDate(),
    endDate: moment().set({ hour: 11, minute: 0 }).toDate(),
  },
  {
    id: 2,
    title: "Break",
    startDate: moment().set({ hour: 11, minute: 1 }).toDate(),
    endDate: moment().set({ hour: 11, minute: 28 }).toDate(),
  },
    {
    id: 3,
    title: "Database Migration",
    startDate: moment().set({ hour: 12, minute: 30 }).toDate(),
    endDate: moment().set({ hour: 16, minute: 0 }).toDate(),
  },
    {
    id: 4,
    title: "Break",
    startDate: moment().set({ hour: 16, minute: 1 }).toDate(),
    endDate: moment().set({ hour: 16, minute: 27 }).toDate(),
  },
    {
    id: 5,
    title: "Mobile Testing",
    startDate: moment().set({ hour: 16, minute: 30 }).toDate(),
    endDate: moment().set({ hour: 18, minute: 0 }).toDate(),
  },
];
