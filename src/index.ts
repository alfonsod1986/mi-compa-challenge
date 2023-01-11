import express, {Express, Response, Request} from 'express';
import helmet from 'helmet';

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(helmet.hidePoweredBy());

app.get('/', (_req: Request, res: Response) => {
    res.json({ msg: 'Welcome to Xmen API Challenge'});
});

app.listen(port, () => console.log(`Server started on port ${port}`));