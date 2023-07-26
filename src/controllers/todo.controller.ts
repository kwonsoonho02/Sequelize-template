import { TodoService } from '@/services/todo.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class TodoListController {
    public todo = Container.get(TodoService)

    public getTodo = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const userId = Number(req.params.id);
            console.log(userId)
            const findAllTodoListData = await this.todo.findAllTodoList(userId);
            res.status(200).json({ data : findAllTodoListData, message : "findAll"})
        }catch (error) {
            next(error)
        }
    }

    public createTodo = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const todoData = req.body;
            const userId = Number(req.params.id);
            const createTodoData = await this.todo.createTodo(todoData);

            res.status(200).json({data : createTodoData, msg : "create"});
        }catch(error){
            next(error)
        }
    }

    public updateTodo = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const todoId = Number(req.params.id);
          const todoData = req.body;
          const updateTodoData = await this.todo.updateTodo(todoId, todoData);
      
          res.status(200).json({ data: updateTodoData, message: 'updated' });
        } catch (error) {
          next(error);
        }
    }

    public deleteTodo = async (req : Request, res : Response, next : NextFunction) => {
        try {
            const todoId = Number(req.params.id);
            const deleteTodoData = await this.todo.deleteTodo(todoId);

            res.status(200).json({ data: deleteTodoData, message: 'delete' });
        }catch (error){
            next(error)
        }
    }
      
}