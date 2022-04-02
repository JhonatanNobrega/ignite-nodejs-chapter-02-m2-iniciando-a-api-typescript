import { Router, Request, Response } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoute = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoute.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoute };
