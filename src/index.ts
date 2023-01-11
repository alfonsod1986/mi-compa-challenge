import express, { Express, Response, Request } from 'express';
import helmet from 'helmet';

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(helmet.hidePoweredBy());

app.get('/', (_req: Request, res: Response) => {
  res.json({
    title: 'Mi Compa Challenge - Xmen API',
    version: '1.0.0'
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
