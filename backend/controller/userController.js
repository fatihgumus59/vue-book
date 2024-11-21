import { modify, remove, getById, listAll } from "../services/user.js";
import { isValidObjectId } from "../utils/index.js";
import { passwordToHash ,accessToken} from "../utils/helper/token.js";
import User from "../model/user.js";

const register = async (req, res) => {

  try {

    req.body.password = passwordToHash(req.body.password);


    const data = {
      username: req.body?.username,
      name: req.body?.name,
      email: req.body?.email,
      password: req.body?.password
    }

    const user = await User.create(data)
      .then(async (response) => {

        if (response) {
          return res.status(201).json({ message: 'Başarılı' });

        } else {
          return res.status(400).json({ message: 'Hatalı oluştu.' });
        }

      })
      .catch(async (e) => {
        const username = await User.findOne({ username: req.body.username, }).select('username');
        const email = await User.findOne({ email: req.body.email }).select('email');

        console.log(e);
        if (username) {
          return res.status(400).json({ message: 'Girilen kullanıcı adı sistemde kayıtlı.' });
        } else if (email) {
          return res.status(400).json({ message: 'Girilen email sistemde kayıtlı.' });
        } else {
          return res.status(400).json({ message: 'Hata Oluştu.' });
        }
      });

  } catch (error) {
    return res.status(400).json({ message: 'Sistemsel bir hata Oluştu.' });
  }
};

const login = async (req, res) => {
  try {
    if (!req.body?.email || !req.body?.password) {
      return res
        .status(400)
        .json({ message: "Doldurulması gereken alanlar var." });
    }

    req.body.password = passwordToHash(req.body.password);

    const data = {
      email: req.body?.email,
      password: req.body?.password,
    };


    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "E-posta bulunamadı." });
    }

    if (user.password !== req.body.password) {
      return res.status(401).json({ message: "Hatalı şifre girişi, lütfen tekrar deneyiniz." });
    }

    const { password, ...notPassword } = user.toObject(); //şifreyi silip kalanını notPassword değişkenine atadık ->destructuring

    const acces_token = accessToken(user?._id)

    return res.status(200).json({ message: "success", user: notPassword,acces_token });

      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Giriş Yapılamadı." });
      }
    };

const getAllUsers = async (req, res) => {
  try {
    listAll()
      .then((response) => {
        return res.status(200).json({
          status: 200,
          message: "Listed Users",
          data: response,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 500,
          message: "Not Listed Users",
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error",
    });
  }
};

const getAUser = async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId(id, res)) return;

  try {
    getById(id)
      .then((response) => {
        if (!response)
          return res.status(500).json({ message: "Not Listed User" });

        return res.status(200).json({
          status: 200,
          message: "Listed User",
          data: response,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 500,
          message: "Not Listed User",
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error",
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId(id, res)) return;

  try {
    const user = await User.findOne({ email: req.body?.email });
    if (user)
      return res.status(400).json({ message: "The Email is already exist" });

    req.body.password = passwordToHash(req.body.password);

    const data = {
      username: req.body?.username,
      email: req.body?.email,
      password: req.body?.password,
    };

    modify(id, data)
      .then((response) => {
        return res.status(200).json({
          status: 200,
          message: "Updates Users",
          data: response,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 500,
          message: "Not Updates Users",
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error",
    });
  }
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId(id, res)) return;

  try {
    remove(id)
      .then((response) => {
        if (!response)
          return res.status(500).json({ message: "Not Removed User" });

        return res.status(201).json({
          status: 201,
          message: "Removed Users",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: 500,
          message: "Not Removed Users",
          error: err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error",
    });
  }
};

export { register, login, getAllUsers, getAUser, updateUser, removeUser };
