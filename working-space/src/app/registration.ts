import { User } from "./user";

export interface Registration {
  id?: string;
  picture?: string;
  name?: string;
  date?: Date;
  email?: string;
  host?: User; 
}
