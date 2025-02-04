const mongoose = require('mongoose')
const{ isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your lastname"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  }
});

userSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password,salt)
  next()
})

userSchema.statics.login = async function(email, password){
  const user = await this.findOne({email})
  if(user){
    const auth = await bcrypt.compare(password,user.password)
    if(auth){
      return user
    }
    throw Error("Incorrect password");
  }
  throw Error("Incorrect email address")
}

const User = mongoose.model('Users', userSchema)

module.exports = User
