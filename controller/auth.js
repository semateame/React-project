const User = require('../model/user');
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');

//User logn in
exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const token = jwt.sign({ id: user._id }, 'ysw', {
                                expiresIn: 3600
                            });
                            res.status(200).json({ token });
                        } else {

                            res.status(400).send({ sucess: false });
                        }
                    });
            } else {
                res.status(400).send({ sucess: false });
            }
        }).catch(err => {
            console.log(err);
        });
};

exports.postLogout = (req, res, next) => {
    res.send({ sucess: true })
}

exports.getSignup = (req, res, next) => {
    res.send({ sucess: true })
};


//user sign up

exports.postSignup = (req, res, next) => {
    const { email, password, role } = req.body;

    //simple validation
    if (!email || !password || !role) {
        res.status(400).json({ msg: "All fields are required" })
    }
    //Check existing user
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                res.status(400).json({ msg: "User exists" })
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        banking: { items: [] },
                        role: role
                    });



                    return user.save()
                })
                .then(user => {
                    console.log(user)
                    const token = jwt.sign({ id: user._id }, 'ysw', {
                        expiresIn: 3600
                    });
                    res.status(200).json(user);
                })
        })
        .catch(err => {
            console.log(err);
        });
};

