import { Category } from "../../model/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoryRepository";

class CategoriesRepository implements ICategoriesRepository{
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    public static getInstance() : CategoriesRepository {
      if (!CategoriesRepository.INSTANCE) {
        CategoriesRepository.INSTANCE = new CategoriesRepository;        
      } 

      return CategoriesRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list() : Category[] {
       return this.categories;
    }

    findByName(name : String) : Category {
      const category = this.categories.find(Category => Category.name === name);
      return category;
    }

}

export { CategoriesRepository };