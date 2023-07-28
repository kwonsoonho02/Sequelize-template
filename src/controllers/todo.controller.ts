import { CreateTodoDto, UpdateTodoDto } from "@/dtos/todos.dto";
import { RequestWithUser } from "@/interfaces/auth.interface";
import { TodoService } from "@/services/todo.service";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { Todo } from "@/interfaces/todo.interface";

export class TodoListController {
  public todo = Container.get(TodoService);

  public getTodo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = req.user.id;
      const findAllTodoListData: Todo[] = await this.todo.findAllTodoList(user);

      res.status(200).json({ data: findAllTodoListData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public createTodo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const todoData: CreateTodoDto = req.body;
      const user = req.user;
      console.log(user);
      const createTodoData: Todo = await this.todo.createTodo(
        todoData,
        user.id
      );

      res.status(200).json({ data: createTodoData, msg: "create" });
    } catch (error) {
      next(error);
    }
  };

  public updateTodo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = req.user;
      const todoId = Number(req.params.id);
      const todoData: UpdateTodoDto = req.body;

      const updateTodoData: boolean = await this.todo.updateTodo(
        user.id,
        todoId,
        todoData
      );

      res.status(200).json({ message: updateTodoData ? "updated" : "false" });
    } catch (error) {
      next(error);
    }
  };

  public deleteTodo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = req.user;
      const todoId = Number(req.params.id);
      const deleteTodoData: number = await this.todo.deleteTodo(
        user.id,
        todoId
      );

      res.status(200).json({ data: deleteTodoData, message: "delete" });
    } catch (error) {
      next(error);
    }
  };
}
