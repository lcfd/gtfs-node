type TTrip = {
  agency_id: string;
  service_id: string;
  trip_id: string;
  trip_headsign?: string;
  trip_short_name?: string;
  direction_id?: string;
  block_id?: string;
  shape_id?: string;
  wheelchair_accessible?: string;
  bikes_allowed?: string;
};

const tripsHeaders: Array<keyof TTrip> = [
  "agency_id",
  "service_id",
  "trip_id",
  "trip_headsign",
  "trip_short_name",
  "direction_id",
  "block_id",
  "shape_id",
  "wheelchair_accessible",
  "bikes_allowed",
];

const emptyTrip: TTrip = {
  agency_id: "",
  service_id: "",
  trip_id: "",
  trip_headsign: "",
  trip_short_name: "",
  direction_id: "",
  block_id: "",
  shape_id: "",
  wheelchair_accessible: "",
  bikes_allowed: "",
};

export { TTrip, tripsHeaders, emptyTrip };
