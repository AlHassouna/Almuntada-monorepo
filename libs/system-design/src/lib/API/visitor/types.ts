export interface IVisitor {
  userAgent: string;
  pathname: string;
  country: Array<object>;
}

export type VisitorCreated = Omit<IVisitor, "createdAt" | "updatedAt">;
