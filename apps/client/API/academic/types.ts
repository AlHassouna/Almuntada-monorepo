export interface IAcademic {
  firstName: string;
  lastName: string;
  age: number;
  imageUrl: string;
  email: string;
  city: string;
  degree: string;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AcademicCreated = Omit<IAcademic, 'createdAt' | 'updatedAt'>;

enum degree {
  AssociatesDegree,

  BachelorsDegree,

  MastersDegree,

  DoctorateDegree,
}
