export interface IVisitor {
  userAgent: string;
  pathname: string;
  location: string
}

export type VisitorCreated = Omit<IVisitor, "createdAt" | "updatedAt">;
