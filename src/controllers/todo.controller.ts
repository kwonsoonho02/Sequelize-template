import { TodoService } from '@/services/todo.service';
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';

export class TodoListController {
    public todo = Container.get(TodoService)

    public getTodo = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const findAllTodoListData = await this.todo.findAllTodoList();
            res.status(200).json({ data : findAllTodoListData, message : "findAll"})
        }catch (error) {
            next(error)
        }
    }

    public createTodo = async (req : Request, res : Response, next : NextFunction) => {
        try{
            const {userId, title, content} = req.body;
            const createTodoData = await this.todo.createTodo(title, content);

            res.status(200).json({data : createTodoData, msg : "성공"});
        }catch(error){
            next(error)
        }
    }
}