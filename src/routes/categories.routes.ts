import { Router, Request, Response } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRouter.get('/', (req: Request, res: Response) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRouter };
