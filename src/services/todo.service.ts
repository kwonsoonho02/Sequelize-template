import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@/exceptions/httpException';
import { Todo } from '@/interfaces/todo.interface';
import { User } from '@interfaces/users.interface';
import { promises } from 'dns';
import { signedCookies } from 'cookie-parser';


@Service()
export class TodoService {
    public async findAllTodoList(): Promise<Todo[]> {
        const allTodoList: Todo[] = await DB.TodoLists.findAll();

        return allTodoList;
    }

    public async createTodo(todoData) {
        const createTodoData = await DB.TodoLists.create({...todoData});

        return createTodoData
    }

    public async updateTodo (todoId, todoData) {
        const updateTodoData = await DB.TodoLists.update(todoData, { where : {id : todoId}})
    
        return updateTodoData;
    }

    public async deleteTodo (todoId) {
        const deleteTodoData = await DB.TodoLists.destroy({where : {id : todoId}})
    
        return deleteTodoData;
    }
}