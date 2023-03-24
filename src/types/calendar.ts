type TCalendar = {
  service_id: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
  start_date: string;
  end_date: string;
};

const calendarHeaders: Array<keyof TCalendar> = [
  "service_id",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "start_date",
  "end_date",
];

const emptyCalendar: TCalendar = {
  service_id: "",
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  saturday: "",
  sunday: "",
  start_date: "",
  end_date: "",
};

export { TCalendar, calendarHeaders, emptyCalendar };
