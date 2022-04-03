import fs from 'fs';
import { parse } from 'csv-parse';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parserFile = parse();

    stream.pipe(parserFile);

    parserFile.on('data', async (line)=>{
      console.log(line);
    })
  }
}

export { ImportCategoryUseCase };
