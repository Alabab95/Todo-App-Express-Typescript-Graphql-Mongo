/**
 * Define User model
 *
 */

import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt-nodejs';

import { IUser } from "../interfaces/User";
import mongoose from '../providers/Database';

// Create the model schema & register your custom methods here
export interface IUserModel extends IUser, mongoose.Document {
  comparePassword(password: string, cb: any): string;
  validPassword(password: string, cb: any): string;
  gravatar(_size: number): string;
}

// Define the User Schema
export const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    fullname: { type: String, default: null },
    deviceId: { type: String, default: null },
    gender: { type: String, default: null },
    website: { type: String, default: null },
    profile_url: { type: String, default: null }
  },
  {
    timestamps: true
  }
);

// Password hash middleware
UserSchema.pre<IUserModel>('save', function(_next) {
  const user = this;
  if (!user.isModified('password')) {
    return _next();
  }

  bcrypt.genSalt(10, (_err, _salt) => {
    if (_err) {
      return _next(_err);
    }

    bcrypt.hash(user.password, _salt, null, (_err, _hash) => {
      if (_err) {
        return _next(_err);
      }

      user.password = _hash;
      return _next();
    });
  });
});

// Compares the user's password with the request password
UserSchema.methods.comparePassword = function(_requestPassword, _cb): any {
  bcrypt.compare(_requestPassword, UserSchema.obj.password, (_err, _isMatch) => {
    return _cb(_err, _isMatch);
  });
};

// User's gravatar
UserSchema.methods.gravatar = function(_size): any {
  if (!_size) {
    _size = 200;
  }

  const url = 'https://gravatar.com/avatar';
  if (!UserSchema.obj.email) {
    return `${url}/?s=${_size}&d=retro`;
  }

  const md5 = crypto
    .createHash('md5')
    .update(UserSchema.obj.email)
    .digest('hex');
  return `${url}/${md5}?s=${_size}&d=retro`;
};

const User = mongoose.model<IUserModel>('User', UserSchema);

export default User;
