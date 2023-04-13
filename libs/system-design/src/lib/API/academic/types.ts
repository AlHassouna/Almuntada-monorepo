export interface IAcademic {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  imageUrl: string;
  email: string;
  city: string;
  degree: string;
  subject: Subject;
  gender: string;
  career: Career;
  phone: string;
  isApproved: boolean;
  isBlocked: boolean;
  isAgree: boolean;
  company: Company;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subject {
  id: number;
  subject: string;
  inputValue?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Company {
  id: number;
  company: string;
  inputValue?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Career {
  id: number;
  career: string;
  inputValue?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IEmails {
  message : string;
  subject : string;
  emails?: Array<object>
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export type EmailsCreated = Omit<IEmails, 'createdAt' | 'updatedAt'>;

export type SearchData = Omit<IAcademic, "age" | "imageUrl" | "phone" | "createdAt" | "updatedAt">;

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

export type SubjectCreated = Omit<Subject, "createdAt" | "updatedAt">;

export type AcademicUpdated = Partial<IAcademic>
