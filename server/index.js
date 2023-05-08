import express from 'express'
const app=express();
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import AuthRoute from './routes/Auth.js'
import FacultyRoutes from './routes/faculty.js'
import PhdRoutes from './routes/phd.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';




app.use(cors());
app.use(bodyParser.json({ limit: "50mb",extended:true}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true}));
app.use(cookieParser())


app.use('/api/users',AuthRoute);
app.use('/api/faculty',FacultyRoutes);
app.use('/api/phd',PhdRoutes);




dotenv.config();
const PORT=process.env.PORT;


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
	app.listen(PORT,()=>{
		console.log(`connection is establist with localhost:${PORT}`);
	})
}).catch((error)=>{
	console.log(error);
})


