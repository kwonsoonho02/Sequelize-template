import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { User } from "@interfaces/users.interface";
import { TodoModel } from "@models/todos.model";
import { userInfo } from "os";

export type UserCreationAttributes = Optional<
  User,
  "id" | "email" | "password"
>;

export class UserModel
  extends Model<User, UserCreationAttributes>
  implements User
{
  public id: number;
  public email: string;
  public password: string;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      modelName: "UserModel",
      tableName: "users",
      sequelize,
    }
  );

  return UserModel;
}
