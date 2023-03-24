import * as fs from "fs";
import * as path from "path";
import { APP_ROOT } from "./server";

export const readFile = ({ filePath }: { filePath: string }) => {
  const csvFilePath = path.resolve(APP_ROOT, filePath);
  const fileContent = fs.readFileSync(csvFilePath, { encoding: "utf-8" });
  return fileContent;
};
