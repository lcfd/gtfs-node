type TShape = {
  shape_id?: string;
  shape_pt_lat: string;
  shape_pt_lon: string;
  shape_pt_sequence: string;
  shape_dist_traveled?: string;
};

const shapesHeaders: Array<keyof TShape> = [
  "shape_id",
  "shape_pt_lat",
  "shape_pt_lon",
  "shape_pt_sequence",
  "shape_dist_traveled",
];

const emptyShape: TShape = {
  shape_id: "",
  shape_pt_lat: "",
  shape_pt_lon: "",
  shape_pt_sequence: "",
  shape_dist_traveled: "",
};

export { TShape, shapesHeaders, emptyShape };
