import { Router } from "express";
import { middlewareToValidateClient } from "./middlewares/ensureAuthenticateClient";
import { middlewareToValidateDeliveryman } from "./middlewares/EnsureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindOpenedDeliveryController } from "./modules/deliveries/useCases/findOpenedDelivery/FindOpenedDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/CreateDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findOpenedDeliveryController = new FindOpenedDeliveryController();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

routes.post("/client/signup", createClientController.handle);
routes.post("/deliveryman/signup", createDeliverymanController.handle);

routes.post("/client/signin", authenticateClientController.handle);
routes.post("/deliveryman/signin", authenticateDeliverymanController.handle);

routes.get(
  "/opened/delivery",
  middlewareToValidateDeliveryman,
  findOpenedDeliveryController.handle
);
routes.post(
  "/delivery/register",
  middlewareToValidateClient,
  createDeliveryController.handle
);

export { routes };
