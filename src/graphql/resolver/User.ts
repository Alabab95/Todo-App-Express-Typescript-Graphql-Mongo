import User from "../../models/User";
import UserController from "../../controllers/User";

const userResolvers = {
  // Logging In A User
  login: UserController.login,
  // Store Details Of New User
  signUp: UserController.register,
  // Update User's Profilexw
  updateProfile: UserController.update,
  // Get All users
  getAllUsers : UserController.getAllUsers
};

export default userResolvers;
