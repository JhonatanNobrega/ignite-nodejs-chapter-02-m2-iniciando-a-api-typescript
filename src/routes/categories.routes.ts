import { Request, Response } from 'express';
import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRouter.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if(categoryAlreadyExists){
    return res.status(400).json({error: 'Category already exists!'});
  }
  categoriesRepository.create({ name, description });
  return res.status(201).send();
});

categoriesRouter.get('/', (req: Request, res: Response) => {
  const all = categoriesRepository.list();
  return res.json(all);
});

export { categoriesRouter };
