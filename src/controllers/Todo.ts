import { Tokens } from "../interfaces/User";
/**
 * Define the Todo API logic
 *
 */

import { request } from "https";

import Todo from "../models/Todo";
import userController from "./User";
import { response } from "express";
import Comment from "../models/Comment";
import User from "../models/User";
import mongoose from "../providers/Database";

class TodoController {
   /**
   * add a comment to a task
   * @param req
   * @returns {any}
   */
    public static async addCommentOnTask(req,res): Promise<any> {
      console.log(" add comment ",req.input)
      const comment = {
        _id : new mongoose.Types.ObjectId(),
        text : req.input.text,
        user : req.input.user,
        todo: req.input.todo
      };
      Comment.create(comment)
      .catch(err=>{return err})
      
      return await Todo.findOneAndUpdate(
        {_id : req.input.todo},
        { $addToSet : { comments : comment._id } },
        { upsert: true },
        (err, todo) => {
          if (err) {
            return null;
          }
  
          return todo;
        },
      );
       
        
    }

  /**
   * Create A New Task
   * @param req
   * @returns {any}
   */

  public static create(req, res): any {
    return Todo.create(req.input)
      .then((todo) => {
        return todo;
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Update Existing Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static update(req, res): any {
    return Todo.findByIdAndUpdate(req.id, req.input)
      .then((todo) => {
        return todo;
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Update Existing Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static delete(req, res): any {
    return Todo.findOne({ _id: req.id ,owner_id : req.user})
      .remove((todoDeleted) => {
        if(todoDeleted==null) throw new Error('This todo doesnt exist or you are not the owner');
      })
      .exec()
      .then((todo) => {
        if(todo.deletedCount==0) return new Error('This todo doesnt exist or you are not the owner');
        //return todo;
        return `${req.id} is deleted`
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Get All Tasks
   * @param req
   * @returns {any}
   */

  public static getAll(): any {
    return Todo.find()
      .then((todos) => {
        return todos;
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Get One Task Based On Its Id
   * @param req
   * @returns {any}
   */

  public static getOne(req, res): any {
    return Todo.findById(req.id)
      .then((todo) => {
        return todo;
      })
      .catch((err) => {
        return err;
      });
  }

  /**
   * Get User's Owned Tasks
   * @param req
   * @returns {any}
   */

  public static getMine(user): any {
    return Todo.find({ owner_id: user.id }, (err, todos) => {
      if (err) {
        return null;
      }
      return todos;
    });
  }

  /**
   * Get User's Colloborated Tasks
   * @param req
   * @returns {any}
   */

  public static getAllMine(user): any {
    return Todo.find({ collaborater_ids: user.id }, (err, todos) => {
      if (err) {
        return null;
      }
      return todos;
    });
  }

  /**
   * Add User As Collaborater in A Task
   * @param req
   * @returns {any}
   */

  public static addUser(req, res): any {
    return Todo.findByIdAndUpdate(
      req.id,
      { $push: { collaborater_ids: req.collaboraterId } },
      (err, todo) => {
        if (err) {
          return null;
        }

        return todo;
      },
    );
  }

  /**
   * Remove User From A Colloborated Tasks
   * @param req
   * @returns {any}
   */

  public static async removeUser(req, res): Promise<any> {
    return Todo.findByIdAndUpdate(
      req.id,
      { $pull: { collaborater_ids: req.collaboraterId } },
      (err, todo) => {
        if (err) {
          return null;
        }
        return todo;
      },
    );
  }

  /**
   * Change the status of a task 
   * @param req
   * @returns {any}
   */

  public static changeStatusOfTask(req, res): any {
    return Todo.findByIdAndUpdate(
      req.id,
      {  $set: { completed: req.status} },
      (err, todo) => {
        if (err) {
          return null;
        }

        return todo;
      },
    );
  }
}

export default TodoController;
