import {Router, Request, Response} from 'express'; 
import bodyParser from 'body-parser';

const router = Router();

router.get('/mensajes', (resq : Request, res : Response) => {
    res.json({
        ok : true,
        mensaje: 'Todo esta bien !!'
    });
});

router.post('/mensajes', (resq : Request, res : Response) => {

    const cuerpo = resq.body.cuerpo;
    const from = resq.body.from;

    res.json({
        ok : true,
        cuerpo : cuerpo,
        from 

    });
});

router.post('/mensajes/:id', (resq : Request, res : Response) => {

    const cuerpo = resq.body.cuerpo;
    const from = resq.body.from;
    const id = resq.params.id;

    res.json({
        ok : true,
        cuerpo : cuerpo,
        from,
        id

    });
});
   
export default router;  