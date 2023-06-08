import {IAddressComponent} from "../google/type";

export interface IVisitor {
  userAgent: string;
  pathname: string;
  location: object
}

export type VisitorCreated = Omit<IVisitor, "createdAt" | "updatedAt">;
