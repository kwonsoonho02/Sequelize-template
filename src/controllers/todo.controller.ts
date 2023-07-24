import { TodoService } from '@/services/todo.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class TodoListController {
    public todo = Container.get(TodoService)

    public getTodo = async (req : Request, res : Response) => {
        try{
            const findAllTodoListData = await this.todo.findAllTodoList();
            res.status(200).json({ data : findAllTodoListData, message : "findAll"})
        }catch (error) {
        
        }
    }
}