import { Router } from 'express';
import { TodoListController } from '@controllers/todo.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class TodoRoute implements Routes {
  public path = '/todos';
  public router = Router();
  public todo = new TodoListController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthMiddleware, this.todo.getTodo);
    this.router.post(`${this.path}`, AuthMiddleware, this.todo.createTodo);
    this.router.put(`${this.path}/:id`, AuthMiddleware, this.todo.updateTodo);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.todo.deleteTodo);
  }
}
