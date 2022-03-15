const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const animalRouter = require('./routes/animal.router');
const jobRouter = require('./routes/job.router');
const activeJobRouter = require('./routes/activeJob.router');
const contactRouter = require('./routes/contact.router');
const auditionRouter = require('./routes/audition.router');
const imagesRouter = require('./routes/images.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/animal', animalRouter);
app.use('/api/job', jobRouter);
app.use('/api/activejob', activeJobRouter);
app.use('/api/contact', contactRouter);
app.use('/api/audition', auditionRouter);
app.use('/api/images', imagesRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
