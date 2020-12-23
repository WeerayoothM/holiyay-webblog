const User = require('../models/User');
const jwt = require("jwt-then");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, mobile, username, imageUrl, description } = req.body;
        console.log(req.body)
        //* validate
        const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;
        if (!emailRegex.test(email)) return res.status(400).json({ message: "Email is not supported from your domain." });
        if (password !== confirmPassword) return res.status(400).json({ message: "Password not match" })
        if (password.length < 6) return res.status(400).json({ message: "Password must be atleast 6 characters long." });
        const userExists = await User.findOne({
            $or: [
                { username },
                { email },
            ]
        });
        if (userExists) return res.status(400).json({ message: "User with same email already exits." })
        const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUND));
        const hashedPW = bcrypt.hashSync(password, salt);
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = hashedPW;
        user.username = username;
        user.mobile = mobile;
        user.imageUrl = imageUrl;
        user.description = description;

        console.log('hello')
        await user.save()

        res.status(201).json({ user })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        let user = await User.findOne({ username: username })

        if (!user) return res.status(400).json({ message: "Invalid email or password" });

        if (bcrypt.compareSync(password, user.password)) {
            const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
            res.status(200).json({ token, message: "User logged in successfully!" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

exports.getUser = async (req, res) => {
    try {
        const { userId } = req.params;

        let user = await User.findOne({ _id: userId })

        if (!user) return res.status(400).json({ message: "Not found User" });

        res.status(200).json({ authorName: user.username, authorProfile: user.imageUrl });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};