export interface DbOperation {
    collection: string;
    data?: any;
    query?: any;
    selectedFields?: any;
}
