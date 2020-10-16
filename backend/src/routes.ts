import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanegesController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanegesController.index);
routes.get('/orphanages/:id', OrphanegesController.show);
routes.post('/orphanages', upload.array('images'), OrphanegesController.create);

export default routes;

// {
// 	"name": "Bahrem Bar2",
// 	"latitude": -16.7011836,
// 	"longitude": -49.2679973,
// 	"about": "Sobre o Bar",
// 	"instructions": "Venha Apreventar",
// 	"opening_hours": "Das 8 as 18hrs",
// 	"open_on_weekends": true
// }