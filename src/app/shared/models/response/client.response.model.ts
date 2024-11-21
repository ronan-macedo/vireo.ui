import { Client } from "../client.model";

export interface ClientResponse {
    items: Client[];
    totalCount: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
}