import { Router, Request, Response } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

categoriesRouter.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRouter };
