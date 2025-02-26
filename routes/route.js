import express from 'express';
const router = express.Router();

import {
    home,
    abreedttime, 
    edttime, 
    abreaddtime,
    deletatime, 
    addtime, 
    listartime, 
    filtrartime,
    abreedttime2, 
    edttime2, 
    abreaddtime2,
    deletatime2, 
    addtime2, 
    listartime2, 
    filtrartime2,

} from '../controllers/controller.js'

router.get('/', home)


//time

//create do modelo time (create)
router.get('/admin/time/add', abreaddtime)
router.post('/admin/time/add', addtime)

//rotas do modelo time (read)
router.get('/admin/time/lst', listartime)
router.post('/admin/time/lst', filtrartime)

//rota do modelo time (delete)
router.get('/admin/time/del/:id', deletatime)

//rota do modelo time (editar)
router.get('/admin/time/edt/:id', abreedttime)
router.post('/admin/time/edt/:id', edttime)



//Admin 2

router.get('/admin2/time/add', abreaddtime2)
router.post('/admin2/time/add', addtime2)

//rotas do modelo time (read)
router.get('/admin2/time/lst', listartime2)
router.post('/admin2/time/lst', filtrartime2)

//rota do modelo time (delete)
router.get('/admin2/time/del/:id', deletatime2)

//rota do modelo time (editar)
router.get('/admin2/time/edt/:id', abreedttime2)
router.post('/admin2/time/edt/:id', edttime2)


export default router