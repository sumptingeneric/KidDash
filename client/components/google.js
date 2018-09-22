const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const passport = require("passport");
const googleCredentials = {
  clientID:
    "575440888732-lst2joh94qfn4tcv7ae17sbos4cbikk9.apps.googleusercontent.com",
  clientSecret: "GKETWr7tnUWBXIIXwN8dTyDM",
  callbackURL: "http://localhost:9876/auth/google/callback"
};

const verificationCb = (token, refreshToken, profile, done) => {
  // This will set their default username to their firstname.lastname. If you want something different, change the info constant
  const info = {
    username: `${profile.emails[0].value.split("@")[0]}`
  };
  User.findOrCreate({
    where: { googleId: profile.id },
    defaults: info
  })
    .spread((user, created) => {
      done(null, user);
    })
    .catch(done);
};

passport.use(new GoogleStrategy(googleCredentials, verificationCb));
// This route needs to get called in order to start the passport process. Notice how it has 'google' as it's first argument, this is how you specify what strategy to use!
router.get(
  "/",
  passport.authenticate("google", { scope: "email", session: false })
);
// This route is called by the third party service that you are authenticating with. This should be set as your callback URL in your settings for your specific auth service
router.get(
  "/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // This is where you put whatever you'd like to do with your user's info that you get back
  }
);
