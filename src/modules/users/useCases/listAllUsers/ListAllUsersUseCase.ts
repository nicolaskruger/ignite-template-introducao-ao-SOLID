import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User não existe");
    }
    if (!user.admin) {
      throw new Error("User não é admim");
    }
    return this.usersRepository.list();
    // Complete aqui
  }
}

export { ListAllUsersUseCase };
