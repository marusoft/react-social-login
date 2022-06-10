const dotenv = require("dotenv");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

dotenv.config();

const GOOGLE_CLIENT_ID = "982060498078-a9me72fdc4qo8hj8h7grk6k4hojkaehn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID ="Iv1.e180af6fe540a3b7";
const GITHUB_CLIENT_SECRET = "db2489408970e28ef1fda58915f6b3e00095d157";


const FACEBOOK_APP_ID = "164645934185325";
const FACEBOOK_APP_SECRET = "07db37a64954a75660e93854d85a15f4";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
