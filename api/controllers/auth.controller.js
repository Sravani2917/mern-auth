import User from '../models/user.model.js';
import bcryptjs from'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup =  async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync( password, );
    const newUser = new User({ username, email, password: hashedPassword });
    try {
    await newUser.save ();
    res.status(201).json({ message: 'user created successfully' });

}   catch (error) {
    next(error);
}
};

export const signin =  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const ValidUser = await User.findOne ({ email });
      if (!ValidUser) return next(errorHandler( 404, 'User not found'));
      const ValidPassword = bcryptjs.compareSync(password, ValidUser.password);
      if (!ValidPassword) return next(errorHandler(401, 'wrong credentials'));
      const token = jwt.sign({ id: ValidUser._id }, process.env.JWT_SECRET,);
      const { password: hashedPassword, ...rest } = ValidUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
      .cookie("access_token", token, { httpOnly: true, expires:
        expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
        next(error);
    }
}
