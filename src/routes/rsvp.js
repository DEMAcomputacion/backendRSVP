import {Schema, model} from 'mongoose';

const shemaRSVP = new Schema ({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    asistencia: {
        type: Boolean,
        required: true
    },
    nroInvitados: {
        type: Number,
        default: 0
    },
    comentario: {
        type: String,
        default: ''
    }
},{
    versionKey: false,
    timestamps: true
})

export default model('RSVP', shemaRSVP);