import { parse } from "csv-parse";
import { FastifyReply, FastifyRequest } from "fastify";
import { finished } from "stream/promises";
import { readFile } from "../readFile";
import { emptyAgency, TAgency } from "../types/agency";
import { TFileNames } from "../types/generic";
import { emptyRoute } from "../types/routes";
import { emptyShape } from "../types/shapes";
import { emptyStop } from "../types/stops";
import { emptyStopTimes } from "../types/stop_times";
import { emptyTrip } from "../types/trips";

export const file_route = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { filename, id } = request.params as {
    filename: TFileNames;
    id?: string;
  };

  const fileContent = readFile({ filePath: `data/${filename}.txt` });
  if (!fileContent) {
    reply.code(404).send({ msg: `The file ${filename}.txt doesn't exists.` });
  }

  let resultData: {}[] = [];

  const csvStream = parse(
    fileContent,
    {
      delimiter: ",",
      columns: true,
      relax_quotes: true,
      trim: true,
      ltrim: true,
      ignore_last_delimiters: true,
      bom: true,
    },
    (error, result: any[]) => {
      if (error) {
        console.error(error);
      }
      if (id) {
        resultData = result.filter((r) => {
          if (filename === "shapes") {
            return r.shape_id === id;
          } else if (filename === "stop_times") {
            return r.trip_id === id;
          } else if (filename === "stops") {
            return r.stop_id === id;
          } else if (filename === "agency") {
            return r.agency_id === id;
          }
          return true;
        });
      } else {
        resultData = result;
      }
    }
  );

  await finished(csvStream);

  let empty_object = {};

  switch (filename) {
    case "agency":
      empty_object = emptyAgency;
      break;
    case "stops":
      empty_object = emptyStop;
      break;
    case "shapes":
      empty_object = emptyShape;
      break;
    case "routes":
      empty_object = emptyRoute;
      break;
    case "trips":
      empty_object = emptyTrip;
      break;
    case "stop_times":
      empty_object = emptyStopTimes;
      break;
    default:
      return resultData;
  }
  return resultData.map((data) => {
    return {
      ...empty_object,
      ...data,
    };
  });
};
