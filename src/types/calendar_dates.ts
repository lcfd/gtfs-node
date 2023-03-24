type TCalendarDates = {
  service_id: string;
  date: string;
  exception_type: string;
};

const calendardatesHeaders: Array<keyof TCalendarDates> = [
  "service_id",
  "date",
  "exception_type",
];

const emptyCalendarDates: TCalendarDates = {
  service_id: "",
  date: "",
  exception_type: "",
};

export { TCalendarDates, calendardatesHeaders, emptyCalendarDates };
