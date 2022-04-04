import { Router } from 'express';

import { AuthenticateUserController } from '../modules/cars/useCases/authenticateUser/AuthenticateUserController';

const autheticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

autheticateRoutes.post('/sessions', authenticateUserController.handle);

export { autheticateRoutes };
