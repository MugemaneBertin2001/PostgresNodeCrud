import { User } from "../db/models";

// create User

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const signUp = await User.create({ firstName, lastName, email });
    console.log("rere", req.signUp);
    return res.status(201).json({
      status: "201",
      message: "Signup Successfully",
      data: signUp,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed",
      error: error.message,
    });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users || users.length === 0) {
      return res.status(404).json({
        status: "404",
        message: "No users found",
      });
    }

    return res.status(200).json({
      status: "200",
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed",
      error: error.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is provided as a route parameter

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: "404",
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "200",
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed",
      error: error.message,
    });
  }
};

export const deleteSingleUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is provided as a route parameter

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: "404",
        message: "User not found",
      });
    }

    await user.destroy();

    return res.status(200).json({
      status: "200",
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is provided as a route parameter
    const { firstName, lastName, email } = req.body; // Assuming you want to update these attributes

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: "404",
        message: "User not found",
      });
    }

    // Update user data
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;

    await user.save(); // Save the updated user data

    return res.status(200).json({
      status: "200",
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Failed",
      error: error.message,
    });
  }
};

