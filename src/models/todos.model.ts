import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Todo } from '@/interfaces/todo.interface';
import { type } from 'os';

export type TodoCreationAttributes = Optional<Todo, 'id' | 'title' | 'content'>

export class TodoModel extends Model<Todo, TodoCreationAttributes>{
    public id?: number;
    public title: string;
    public content: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof TodoModel {
    TodoModel.init(
        {
            id: {
                type: DataTypes.NUMBER,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type : DataTypes.STRING,
                allowNull : false,
            },
            content: {
                type : DataTypes.STRING,
                allowNull : false,
            },
        },
        {
            tableName: 'todos',
            sequelize,
        },
    );

    return TodoModel;
}