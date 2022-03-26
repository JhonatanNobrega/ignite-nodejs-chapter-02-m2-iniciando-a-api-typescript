import { Request, Response } from 'express';
import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();
// const categoriesRepository = new PostgresCategoriesRepository();

categoriesRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(
    categoriesRepository
  );
  createCategoryService.execute({name, description});
  return res.status(201).send();
});

categoriesRouter.get('/', (req: Request, res: Response) => {
  const all = categoriesRepository.list();
  return res.json(all);
});

export { categoriesRouter };
