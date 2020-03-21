const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
// Generate JWT request through configuration information and verify this token
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            // After you have obtained the correponing content in the passport, you can inquire the obtained content.
            User.findById(jwt_payload.id)
                .then(user => {  // Inquire that a user is returned
                    if(user){  // Determine if the user exists
                        return done(null, user);  // Return user back
                    }
                    // Does not exist, return false
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};