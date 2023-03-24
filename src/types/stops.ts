type TStop = {
  stop_id?: string;
  stop_code?: string;
  stop_name?: string;
  stop_desc?: string;
  stop_lat?: string;
  stop_lon?: string;
  zone_id?: string;
  stop_url: string;
  location_type?: string;
  parent_station?: string;
  stop_timezone?: string;
  wheelchair_boarding?: string;
  level_id?: string;
  platform_code?: string;
};

const stopHeaders: Array<keyof TStop> = [
  "stop_id",
  "stop_code",
  "stop_name",
  "stop_desc",
  "stop_lat",
  "stop_lon",
  "zone_id",
  "stop_url",
  "location_type",
  "parent_station",
  "stop_timezone",
  "wheelchair_boarding",
  "level_id",
  "platform_code",
];

const emptyStop: TStop = {
  stop_id: "",
  stop_code: "",
  stop_name: "",
  stop_desc: "",
  stop_lat: "",
  stop_lon: "",
  zone_id: "",
  stop_url: "",
  location_type: "",
  parent_station: "",
  stop_timezone: "",
  wheelchair_boarding: "",
  level_id: "",
  platform_code: "",
};

export { TStop, stopHeaders, emptyStop };
