export interface ScriptureTSV {
  [chapter: string]: { [verse: string]: Array<TSVRow> };
}

export interface TSVRow {
  Reference: string;
  ID: string;
  [key: string]: any; // additional TSV column header/data
}
