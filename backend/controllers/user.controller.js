require('dotenv').config()
const userModel = require("../models/user");
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    const addedUser = await userModel.create({ username, email, password});
    addedUser.password = undefined;
    res.status(201).json({ message: 'success', addedUser });
}

const logIn = async (req, res, next) => {
    const { email, password } = req.body;
    const foundedUser = await userModel.findOne({ email }).select('+password');
    if (!foundedUser) return next(new AppError('Email or password is not correct', 404));
    const isMatch = await bcrypt.compare(password, foundedUser.password)
    if (!isMatch) return next(new AppError('Email or password is not correct', 404));
    const token = await jwt.sign({ id: foundedUser._id }, process.env.JWT_SECRET_KEY);
    foundedUser.password = undefined;
    res.status(200).json({ token, foundedUser });
}


const updateUser = async (req, res, next) => {
    const userFromToken = req.user;
    const { id } = req.params;
    if (userFromToken._id != id) return next(new AppError('unauthorized', 403))
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json({ message: 'success', updatedUser });
}

const deleteUser = async (req, res, next) => {
    const userFromToken = req.user;
    const { id } = req.params;
    if (userFromToken._id != id && userFromToken.role != 'admin') return next(new AppError('unauthorized', 403))
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(201).json({ message: 'success',deletedUser });
}

module.exports = { signUp, logIn, updateUser, deleteUser };