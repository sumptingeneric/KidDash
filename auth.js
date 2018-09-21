const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
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
          '575440888732-lst2joh94qfn4tcv7ae17sbos4cbikk9.apps.googleusercontent.com',
        clientSecret: 'fKlUmFUTCYA4f06VAJMZKp7r',
        callbackURL: 'http://localhost:8079/auth/google/callback'
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
