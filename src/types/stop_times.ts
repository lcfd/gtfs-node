type TStopTimes = {
  trip_id: string;
  arrival_time?: string;
  departure_time?: string;
  stop_id?: string;
  stop_sequence?: string;
  stop_headsign?: string;
  pickup_type?: string;
  drop_off_type?: string;
  continuous_pickup?: string;
  continuous_drop_off?: string;
  shape_dist_traveled?: string;
  timepoint?: string;
};

const tripsStopTimes: Array<keyof TStopTimes> = [
  "trip_id",
  "arrival_time",
  "departure_time",
  "stop_id",
  "stop_sequence",
  "stop_headsign",
  "pickup_type",
  "drop_off_type",
  "continuous_pickup",
  "continuous_drop_off",
  "shape_dist_traveled",
  "timepoint",
];

const emptyStopTimes: TStopTimes = {
  trip_id: "",
  arrival_time: "",
  departure_time: "",
  stop_id: "",
  stop_sequence: "",
  stop_headsign: "",
  pickup_type: "",
  drop_off_type: "",
  continuous_pickup: "",
  continuous_drop_off: "",
  shape_dist_traveled: "",
  timepoint: "",
};

export { TStopTimes, tripsStopTimes, emptyStopTimes };
