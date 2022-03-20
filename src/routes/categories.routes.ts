import { Request, Response } from 'express';
import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRouter = Router();

const categories: Category[] = [];

categoriesRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return res.status(201).json({ category });
});

export { categoriesRouter };
