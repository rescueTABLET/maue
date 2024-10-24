import { parseString } from "xml2js";
import type { Cell, Column, Row, Table } from "./types";

export async function parseMaue(xml: string): Promise<Table> {
  const data = await parseXml(xml);
  return parseTable(data.Table);
}

function parseTable(data: any): Table {
  const name = data.$.name;
  const columns = data.Data.map(parseColumn);
  const rows = ((data.Row ?? []) as ReadonlyArray<any>)
    .map(parseRow)
    .filter(notEmpty);

  return { name, columns, rows };
}

function parseColumn(data: any): Column {
  return { name: data.$.header, type: data.$.type };
}

function parseRow(data: any): Row | undefined {
  if (typeof data === "string") return;
  const cells = ((data.Column ?? []) as ReadonlyArray<any>).map(parseCell);
  const tables = ((data.Table ?? []) as ReadonlyArray<any>).map(parseTable);
  return { cells, tables };
}

function parseCell(data: any): Cell {
  return { value: data.$.value };
}

function parseXml(xml: string): Promise<any> {
  return new Promise((resolve, reject) =>
    parseString(xml, (err, result) => (err ? reject(err) : resolve(result)))
  );
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== undefined && value !== null;
}
