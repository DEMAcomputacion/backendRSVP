import {Router} from 'express';
import * as rsvpControllers from './rsvp.controller.js';

const router = Router();

router.get('/rsvp', rsvpControllers.getRsvps)
router.get('/rsvp/:id', rsvpControllers.getRsvp)
router.post('/rsvp', rsvpControllers.createRsvp)
router.delete('/rsvp/:id', rsvpControllers.deleteRsvp)
router.put('/rsvp/:id', rsvpControllers.updateRsvp)

export default router;