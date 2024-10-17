

import express from 'express';
import { addMessage, deletedMessage, getAllMessages } from './message.controller.js';
import { auth } from '../../middleware/auth.js';
import { validation } from '../../middleware/validation.js';
import { addMessageSchema, deleteMessageSchema, getMessagesSchema } from './message.validation.js';

const messageRouter = express.Router();


messageRouter.post('/addMessage',validation(addMessageSchema),addMessage)
messageRouter.get('/getAllMessages',auth,validation(getMessagesSchema),getAllMessages)
messageRouter.delete('/deletedMessage',auth,validation(deleteMessageSchema),deletedMessage)


export default messageRouter;