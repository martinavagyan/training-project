import { User } from "./user";

export interface Visit {
    entryId?: number;
    name?: string;
    email?: string;
    date?: Date;
    host?: User;
    _id?: string;
  }
  