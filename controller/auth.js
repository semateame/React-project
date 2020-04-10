const User = require('../model/user');
const bcrypt = require('bcrypt')

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {


                            return res.send({ sucess: true })
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
    res.send({sucess:true})
}

exports.getSignup = (req, res, next) => {
    res.send({sucess:true})
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const role = req.body.role;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.send({sucess:true});
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
                    return user.save();
                })
                .then(result => {
                    res.send({sucess:true});
                });
        })
        .catch(err => {
            console.log(err);
        });
};
