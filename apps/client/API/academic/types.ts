export interface IAcademic {
  firstName: string;
  lastName: string;
  age: number;
  imageUrl: string;
  email: string;
  city: string;
  degree: string;
  subject: string;

  career: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AcademicCreated = Omit<IAcademic, "createdAt" | "updatedAt">;

export type AcademicField =
  | "firstName"
  | "lastName"
  | "age"
  | "imageUrl"
  | "email"
  | "city"
  | "degree"
  | "subject"
  | "career";

// enum degree {
//   AssociatesDegree,
//
//   BachelorsDegree,
//
//   MastersDegree,
//
//   DoctorateDegree,
// }
