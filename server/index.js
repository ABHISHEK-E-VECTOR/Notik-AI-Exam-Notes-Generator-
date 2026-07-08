import express from 'express';
import dotenv from 'dotenv';
import connectDb from './utils/connectDb.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
    credentails:true,
    methods:['GET','POST','PUT','DELETE'],
}))
app.use(express.json());
app,use(cookieParser());
app.get('/', (req, res) => {
  res.send('message: Exam note ai running on backend');

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
})

app.use('/api/auth', authRouter)

