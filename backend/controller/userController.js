import User from '../model/user.js';
import { isValidObjectId } from '../utils/index.js';
import { passwordToHash } from "../utils/helper/token.js";


const updateUser = async (req, res) => {
  const { username, email, password } = req.body;

  const id = req.user._id;

  if (isValidObjectId(id, res)) return;

  try {
    const user = await User.findById(id)
    if (!user) return;

    user.username = username || user.username;
    user.email = email || user.email;
    user.password = passwordToHash(password) || user.password;


    await user.save();

    res.status(200).json({ message: 'The user details updated succesfully' });
  } catch (error) {
    console.error('Error at updateUser', error);
    return res.status(500).json({ error: 'Internal Server error' });
  }
};

export { updateUser };