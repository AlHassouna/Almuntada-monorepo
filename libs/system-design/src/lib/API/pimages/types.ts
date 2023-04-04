export interface IPimages {
  title: string;
  imgUrl: string;
  createAt: Date;
  updatedAt: Date;
}

export type IPimagesCreated = Omit<IPimages, 'createAt' | 'updatedAt'>;
