import { hash } from 'bcrypt';
import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { Todo } from '@/interfaces/todo.interface';
import { User } from '@interfaces/users.interface';
import { promises } from 'dns';
import { signedCookies } from 'cookie-parser';
import { where } from 'sequelize';
import { CreateTodoDto } from '@/dtos/todos.dto';
import { UpdateTodoDto } from '@/dtos/todos.dto';


@Service()
export class TodoService {
    public async findAllTodoList(userId : number): Promise<Todo[]> {
        const allTodoList: Todo[] = await DB.TodoLists.findAll({where: {userId}});

        return allTodoList;
    }

    public async createTodo(todoData : CreateTodoDto, userId : number) : Promise<Todo> {
        console.log(todoData)
        const createTodoData : Todo = await DB.TodoLists.create({...todoData, userId});

        return createTodoData
    }

    public async updateTodo (userId : number, todoId : number, todoData : UpdateTodoDto) : Promise<number[]>{
        const updateTodoData : number[] = await DB.TodoLists.update(todoData, { where : {userId, id : todoId}})
    
        return updateTodoData;
    }

    public async deleteTodo (userId : number, todoId : number) : Promise<number> {
        const deleteTodoData : number = await DB.TodoLists.destroy({where : {userId, id : todoId}})
    
        return deleteTodoData;
    }
}