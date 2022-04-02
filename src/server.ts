import express from 'express';
import { categoriesRouter } from './routes/categories.routes';
import { specificationsRoute } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specifications', specificationsRoute);

app.listen(3333, () => console.log('Server is running!'));
