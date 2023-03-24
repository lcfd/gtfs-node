type TRoute = {
  route_id: string;
  agency_id?: string;
  route_short_name?: string;
  route_long_name?: string;
  route_desc?: string;
  route_type: string;
  route_url?: string;
  route_color?: string;
  route_text_color?: string;
  route_sort_order?: string;
  continuous_pickup?: string;
  continuous_drop_off?: string;
};

const routesHeaders: Array<keyof TRoute> = [
  "route_id",
  "agency_id",
  "route_short_name",
  "route_long_name",
  "route_desc",
  "route_type",
  "route_url",
  "route_color",
  "route_text_color",
  "route_sort_order",
  "continuous_pickup",
  "continuous_drop_off",
];

const emptyRoute: TRoute = {
  route_id: "",
  agency_id: "",
  route_short_name: "",
  route_long_name: "",
  route_desc: "",
  route_type: "",
  route_url: "",
  route_color: "",
  route_text_color: "",
  route_sort_order: "",
  continuous_pickup: "",
  continuous_drop_off: "",
};

export { TRoute, routesHeaders, emptyRoute };
