export type Table = {
  name: string;
  columns: ReadonlyArray<Column>;
  rows: ReadonlyArray<Row>;
};

export type Column = {
  name: string;
  type: DataType;
};

export type Row = {
  cells: ReadonlyArray<Cell>;
  tables: ReadonlyArray<Table>;
};

export type Cell = {
  value: string;
};

export type DataType = "STRING";
