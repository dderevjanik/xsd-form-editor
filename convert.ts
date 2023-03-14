import { Jsonix } from "jsonix";
import { generated } from "./generated.js";
import fs from "fs";

const xml = fs.readFileSync("./hierosolyma.xml", "utf-8").toString();
// console.log(xml);
const context = new Jsonix.Context([ generated ]);
const unmarshaller = context.createUnmarshaller(xml);

const document = unmarshaller.unmarshalString(xml);
fs.writeFileSync("./output.json", JSON.stringify(document, null, 2));

