import { merge } from 'lodash';
import todoResolvers from './Todo';
import userResolvers from './User';

const privateUserResolvers = {
  updateProfile: userResolvers.updateProfile,
  getUsers : userResolvers.getAllUsers
};

// Resolvers That Need Authentication Before Access
const privateResolvers = merge(todoResolvers, privateUserResolvers);

export default privateResolvers;
