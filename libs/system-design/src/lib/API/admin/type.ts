export interface IUser {
  id: number,
  userName: string,
  password: string,
  firstName: string,
  lastName: string,
  adminPermissions: string,
  createdAt: Date,
  updatedAt: Date,
  accessToken: string
}

export interface IUserSendData {
  userName: string,
  password: string,
}
