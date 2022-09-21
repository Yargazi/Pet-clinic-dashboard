import "../../lib/db";
import Users from "../../models/Appointments";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await create(req, res);
  }
  if (req.method === "GET") {
    return await read(req, res);
  }
  if (req.method === "DELETE") {
    return await del(req, res);
  }
  if (req.method === "PUT") {
    return await edit(req, res);
  }
}

export const create = async (req, res) => {
  const newUser = await Users.create({ ...req.body });
  res.status(200).send(newUser);
};

export const read = async (req, res) => {
  const users = await Users.find();
  res.status(200).send({ users });
};

export const edit = async (req, res) => {
  const userId = req.query._id;

  const data = req.body;
  const updatedUser = await Users.findByIdAndUpdate(userId, data, {
    returnOriginal: false,
  });

  res.status(200).send({ updatedUser, message: "User updated" });
  if (!updatedUser) {
    res.status(404).send({ message: " User not found" });
  } else {
    res.status(404).send({ message: "Error while updating user" });
  }
};

export const del = async (req, res) => {
  try {
    const userId = req.query._id;

    const deletedUser = await Users.findByIdAndDelete(userId);

    if (deletedUser) {
      res.status(200).send({
        ok: true,
        deletedUser: deletedUser._id,
        message: "User Deleted",
      });
      return;
    } else {
      const err = new Error("User already deleted");
      err.statusCode = 500;
      throw err;
    }
  } catch (err) {
    res.status(err.statusCode || 500).send(err.message);
  }
};
