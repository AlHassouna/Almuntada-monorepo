export interface IContactUs {
  fullName : string;
  email : string;
  message : string;
  subject : string;
  createdAt: Date;
  updatedAt: Date;
}

export type ContactUsCreated = Omit<IContactUs, 'createdAt' | 'updatedAt'>;

export type ContactUsField =
  | 'fullName'
  | 'email'
  | 'message'
  | 'subject'
;
