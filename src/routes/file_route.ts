import { parse } from "csv-parse";
import { FastifyReply, FastifyRequest } from "fastify";
import { finished } from "stream/promises";
import { readFile } from "../readFile";
import { emptyAgency, TAgency } from "../types/agency";
import { emptyStop } from "../types/stops";

export const file_route = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { filename } = request.params as { filename: string };

  const fileContent = readFile({ filePath: `data/${filename}.txt` });

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
    (error, result: TAgency[]) => {
      if (error) {
        console.error(error);
      }
      resultData = result;
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
