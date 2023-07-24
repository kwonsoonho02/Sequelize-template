import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/httpException';
import { Todo } from '@/interfaces/todo.interface';


@Service()
export class TodoService {
    public async findAllTodoList(): Promise<Todo[]> {
        const allTodoList: Todo[] = await DB.TodoLists.findAll();

        return allTodoList;
    }
 
}