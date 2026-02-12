import 'dotenv/config'
import express from 'express';
import morgan from 'morgan';
import db from './database/index.js';
import homeRouter from './routers/home.router.js';
import destinationRouter from './routers/destination.router.js';
import activityRouter from './routers/activity.router.js';
import formRouter from './routers/form.router.js';

//SERVER
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
//routes
app.use('/', homeRouter);
app.use('/destinations', destinationRouter)
app.use('/activities', activityRouter);
app.use('/form', formRouter);


app.get('/', (req, res) => {
  res.status(200).json('Working');
});

app.use(morgan('tiny'));

app.use((err, req, res, next) => {
  console.log(`💩✨--${err.message}--✨💩)`);
  console.error(err);
  res.status(500).send('An error occurred. Please try again later.');
});

app.listen(8079, () => {
  console.log(`(👉ﾟヮﾟ)👉 Web Server available - 8079 👈(ﾟヮﾟ👈)`);
});

//DB
await db.sequelize.authenticate();
//TODO SCAP
// await db.sequelize.sync({alter: true});
