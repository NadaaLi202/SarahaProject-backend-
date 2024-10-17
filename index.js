

import express from 'express'
import { dbConnection } from './databases/dbConnection.js';
import userRouter from './src/modules/users/user.router.js';
import messageRouter from './src/modules/messages/message.router.js';
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.json())
app.use('/users',userRouter)
app.use('/messages',messageRouter)
dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))