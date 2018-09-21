const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "377641112520-9bbi4k414u8u8327keqoj2o2o6fmkph0.apps.googleusercontent.com",
        clientSecret: "T7ZcWVoImZocJ_3bcEEofm_c",
        callbackURL: "http://localhost:9876/auth/google/callback"
      },
      (token, refreshToken, profile, done) => {
        console.log(token);
        return done(null, {
          profile: profile,
          token: token
        });
      }
    )
  );
};
