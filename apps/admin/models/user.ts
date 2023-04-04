export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  age: number;
  city: string;
  degree: string;
  subject: Subject;
  career: Career;
  gender: string;
  phone: string;
  company: Company;
  isApproved: boolean;
  isBlocked: boolean;
  isAgree: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Subject {
  id: number;
  subject: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

interface Career {
  id: number;
  career: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}

interface Company {
  id: number;
  company: string;
  user: User;
  createdAt: Date;
  updatedAt: Date;
}
