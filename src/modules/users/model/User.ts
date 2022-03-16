import { v4 as uuidV4 } from "uuid";

interface IUser {
  name: string;
  email: string;
}

class User {
  id: string;
  name: string;
  email: string;
  admin = false;
  created_at: Date;
  updated_at: Date;
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }
  static create({ name, email }: IUser): User {
    const user = new User();
    user.name = name;
    user.email = email;
    user.created_at = new Date();
    user.updated_at = new Date();
    user.id = uuidV4();
    user.admin = false;
    return user;
  }

  toAdmin() {
    this.admin = true;
    this.updated_at = new Date();
  }

  // Complete aqui
}

export { User };
