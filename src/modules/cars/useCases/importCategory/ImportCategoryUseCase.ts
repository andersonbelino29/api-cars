import fs from "fs";
import { parse } from 'csv-parse';
import { ICategoriesRepository } from "../../repositories/ICategoryRepository";

interface IImportCategory{
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private CategoriesRepository : ICategoriesRepository) {}
    
    loadCategory(file : Express.Multer.File) : Promise<IImportCategory[]> {
      return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file.path);
        const categories : IImportCategory[] = [];

        const parseFile = parse();

        stream.pipe(parseFile);
     
        parseFile.on("data", async(line) => {
           const [ name, description ] = line;
           categories.push({
              name,
              description
           });
        })
        .on("end", () => {
            fs.promises.unlink(file.path);
            resolve(categories);
        })
        .on("error", (err) => {
            reject(err);
        })
      })
    }

    async execute(file : Express.Multer.File ) : Promise<void> {
        const categories = await this.loadCategory(file);
        
        categories.map(category =>{
            const { name, description } = category;

            const existCategory = this.CategoriesRepository.findByName(name);

            if (!existCategory) {
                this.CategoriesRepository.create({
                    name,
                    description,
                });
            }
        })
    }
}

export { ImportCategoryUseCase }