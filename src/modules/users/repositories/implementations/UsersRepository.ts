import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  private finBy(
    value: string | boolean | Date | (() => void),
    key: keyof User
  ): User {
    return this.users.find((user) => user[key] === value);
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = User.create({ name, email });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return this.finBy(id, "id");
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return this.finBy(email, "email");
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    receivedUser.toAdmin();
    return receivedUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
