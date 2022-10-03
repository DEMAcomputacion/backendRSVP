import RSVP from './rsvp.js'

export const getRsvps = async (req, res) => {
    try {
        const rsvps = await RSVP.find().sort({updatedAt: 1});
        return res.json(rsvps)
    }catch(error){
        console.log(error)
    }
}

export const getRsvp =  async (req, res) => {
    const rsvpEncontrado = await RSVP.findById(req.params.id);
    if(!rsvpEncontrado) return res.status(204).json;
    return res.json(rsvpEncontrado)
}

export const createRsvp = async (req, res) => {
    const rsvp = new RSVP(req.body);
    const rsvpGuardado = await rsvp.save();
    return res.json(rsvpGuardado);
}

export const deleteRsvp = async (req, res) => {
    const rsvpEncontrado = await RSVP.findById(req.params.id);
    if(!rsvpEncontrado) return res.status(204).json;
    return res.json(rsvpEncontrado)
}

export const updateRsvp = async (req, res) => {
    const rsvpActualizado = await RSVP.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!rsvpActualizado) return res.status(204).json;
    return res.json(rsvpActualizado)
}