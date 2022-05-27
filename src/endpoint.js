

import { Router } from "express"
import {Semaforo, DiaSemana, Fatoral, SequenciaPar} from "./services.js"
const server = Router();


server.get('/dia4/semaforo/:cor', (req, resp) => {
    try {
        const {cor} = req.params;
        const x = Semaforo(cor)
        resp.send ({
            cor:x
        })
    }

    catch (err) {
        resp.send ({
            erro : err.message
        })
    }
})


server.get ('/dia4/diasemana', (req, resp)=>{
    try {
        const {x} = req.query;
        const j = DiaSemana(x)
        resp.send({
            dia : j
        })
    }
    catch (err) {
        resp.send ({
            erro : err.message
        })
    }
})


server.post('/dia4/fatorial' , (req, resp)=>{
    try {
        const x = Number(req.query.x)
        const j = Fatoral(x)
        resp.send({
            FAT : j
        })
    }
    catch (err) {
        resp.send({
            erro : err.message
        })
    }
})



server.post('/dia4/sequenciapar', (req, resp) => {
    try {
        const a = req.body.limite
        const x = SequenciaPar(a)
        resp.send ({
            limite : x
        })
    }
    catch (err) {
        resp.send({
            erro: err.message
        })
    }
})



export default server;