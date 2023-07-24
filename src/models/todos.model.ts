import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Todo } from '@/interfaces/todo.interface';
import { type } from 'os';
import UserModel from '@models/users.model';
export type TodoCreationAttributes = Optional<Todo, 'id' | 'title' | 'content' | 'userId'>

export class TodoModel extends Model<Todo, TodoCreationAttributes>{
    public id?: number;
    public title: string;
    public content: string;
    public userId : number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof TodoModel {
    TodoModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
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
            userId : {
                type : DataTypes.INTEGER,
                allowNull : false,
                references : {
                    model : 'users',
                    key : "id"
                }
            },
        },
        {
            tableName: 'todos',
            sequelize,
        },
    );

    return TodoModel;
}