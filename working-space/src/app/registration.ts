import { User } from "./user";

export interface Registration {
  id?: string;
  name?: string;
  date?: Date;
  email?: string;
  host?: User;
  picture?: string;
}
