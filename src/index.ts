import express from 'express'
import cors from 'cors';
const app = express();

import indexRoutes from './routes/index'

//middlewares
app.set('port',process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(indexRoutes);

app.listen(app.get('port'),()=>{
    console.log("Server on port",app.get('port'));
});
