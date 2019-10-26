const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./config/passport-setup');
const routes = require('./routes/api');
const authRoutes = require('./routes/auth');
const keys = require('./config/keys');

//setup express app
const app = express();

//enable local testing with HTTP requests
app.use(cors({
    credentials: true,
    origin: keys.frontEnd.URL
}));

//fix deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to the database
mongoose.connect(keys.mongodb.dbURI);
mongoose.Promise = global.Promise; //mongodb promise is deprecated

//initialize body-parser (before the route handler!)
app.use(bodyParser.json());

app.use(cookieSession({
    maxAge: 1000*60*60*24,
    keys: [keys.cookieSession.key]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('./public'));

//initialize routes
app.use('/api', routes);
app.use('/auth', authRoutes);

//listen for requests
app.listen(process.env.PORT || 4000, function(){
    console.log('Listening for requests');
});