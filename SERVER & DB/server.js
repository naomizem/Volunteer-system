const mongooseConnect = require('./db/mongoConnect');
const volunteersRoute = require('./routes/VolunteersRoute');
const helpRequestsRoute = require('./routes/helpRequestRoute');
const locationRoute =require('./routes/LocationRoute')
const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.use('/api/volunteers', volunteersRoute);
app.use('/api/helpRequests', helpRequestsRoute);
app.use('/api/location', locationRoute);



(async () => {
    await mongooseConnect();
})()
app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).send('an error in app')
})

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`);
})

