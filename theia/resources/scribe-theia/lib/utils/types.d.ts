export interface ScriptureTSV {
    [chapter: string]: {
        [verse: string]: Array<TSVRow>;
    };
}
export interface TSVRow {
    Reference: string;
    ID: string;
    [key: string]: any;
}
//# sourceMappingURL=types.d.ts.map