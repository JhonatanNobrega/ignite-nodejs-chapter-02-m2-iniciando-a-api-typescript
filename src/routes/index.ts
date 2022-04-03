import { Router } from 'express';

import { categoriesRouter } from './categories.routes';
import { specificationsRoute } from './specifications.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/specifications', specificationsRoute);

export { routes };
