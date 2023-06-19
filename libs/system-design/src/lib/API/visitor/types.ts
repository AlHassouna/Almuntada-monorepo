export interface IVisitor {
  userAgent: string;
  pathname: string;
  location: Array<object>;
}

export type VisitorCreated = Omit<IVisitor, "createdAt" | "updatedAt">;
