export interface IAcademic{
  firstName: string;
  lastName:string;
  age: number;
  email: string;
  city: string;
  degree: string;
  createdAt:Date;
  updatedAt: Date;
}

enum degree{
AssociatesDegree,

BachelorsDegree,

MastersDegree,

DoctorateDegree,
}
