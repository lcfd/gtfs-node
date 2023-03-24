import { parse } from "csv-parse";
import { FastifyReply, FastifyRequest } from "fastify";
import { finished } from "stream/promises";
import { readFile } from "../readFile";
import { TAgency, agencyHeaders } from "../types/agency";

export const stops_route = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const fileContent = readFile({ filePath: "data/stops.txt" });

  let agencies: TAgency[] = [];

  const csvStream = parse(
    fileContent,
    {
      delimiter: ",",
      columns: agencyHeaders,
      from: 2,
    },
    (error, result: TAgency[]) => {
      if (error) {
        console.error(error);
      }
      agencies = result;
    }
  );

  await finished(csvStream);

  return agencies;
};
