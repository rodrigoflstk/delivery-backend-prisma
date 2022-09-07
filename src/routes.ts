import { Router } from "express";
import { middlewareToValidateJwt } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

// ======================================================================================== Instanciando os Controllers

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

// ======================================================================================== configurando os endpoints

routes.post("/client/signup", createClientController.handle);
routes.post("/deliveryman/signup", createDeliverymanController.handle);

routes.post("/client/signin", authenticateClientController.handle);
routes.post("/deliveryman/signin", authenticateDeliverymanController.handle);

routes.post(
  "/delivery/register",
  middlewareToValidateJwt,
  createDeliveryController.handle
);
// ========================================================================================

export { routes };
