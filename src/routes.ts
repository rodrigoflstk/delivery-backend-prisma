import { Router } from "express";
import { middlewareToValidateClient } from "./middlewares/ensureAuthenticateClient";
import { middlewareToValidateDeliveryman } from "./middlewares/EnsureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";

import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/client/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/client/useCases/delivery/FindAllDeliveriesController";
import { AddDeliverymanController } from "./modules/deliveries/useCases/addDeliveryman/AddDeliverymanController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindOpenedDeliveryController } from "./modules/deliveries/useCases/findOpenedDelivery/FindOpenedDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliverymanDeliveriesController } from "./modules/deliveryman/useCases/delivery/FindAllDeliveriesController";

const routes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const addDeliverymanController = new AddDeliverymanController();
const findAllDeliverymanDeliveriesController =
  new FindAllDeliverymanDeliveriesController();

const createDeliveryController = new CreateDeliveryController();
const findOpenedDeliveryController = new FindOpenedDeliveryController();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

routes.post("/client/signup", createClientController.handle);
routes.post("/client/signin", authenticateClientController.handle);
routes.get(
  "/client/deliveries",
  middlewareToValidateClient,
  findAllDeliveriesController.handle
);

routes.post("/deliveryman/signup", createDeliverymanController.handle);
routes.post("/deliveryman/signin", authenticateDeliverymanController.handle);
routes.get(
  "/deliveryman/deliveries",
  middlewareToValidateDeliveryman,
  findAllDeliverymanDeliveriesController.handle
);

routes.get(
  "/delivery/opened",
  middlewareToValidateDeliveryman,
  findOpenedDeliveryController.handle
);
routes.post(
  "/delivery/register",
  middlewareToValidateClient,
  createDeliveryController.handle
);
routes.put(
  "/delivery/addDeliveryman/:id",
  middlewareToValidateDeliveryman,
  addDeliverymanController.handle
);

export { routes };
