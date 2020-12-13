const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const User = require("../models/User");

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
};

const jwtStrategy = new Strategy(option, async (payload, done) => {
    const targetUser = await User.findOne({ _id: payload.id });
    if (targetUser) {
        done(null, targetUser);
    } else {
        done(null, false);
    }
});

passport.use("jwt-auth", jwtStrategy);