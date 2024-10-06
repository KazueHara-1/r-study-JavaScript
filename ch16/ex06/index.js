import { open } from "node:fs/promises";

let filehandle = null;
try {
  filehandle = await open("temp.txt", "r+");
  await filehandle.truncate(20);
} finally {
  await filehandle?.close();
}
