require('dotenv').config()
const { Schema, default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      select: false
   }
});


userSchema.pre('save', async function () {
   const { password } = this;
   if (this.isModified('password')) {
      const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
      this.password = hashedPassword;
   }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;