import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface Irequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o respositorio
 */
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: Irequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
