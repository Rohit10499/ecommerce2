import { Contact } from "../models/contact.models.js";
import { User } from "../models/user.models.js";

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findUser = await User.deleteOne({ _id: id });
    if (!findUser) {
      return res.status(403).json({ message: "No User presant" });
    }

    res.status(200).json({ message: "User deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, getAllContacts, deleteUser };
