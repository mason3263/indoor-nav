import express, { Express, Request, Response } from 'express';
import path from 'path';


const app: Express = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static('public'));

app.get('/', (req: Request, res: Response) => {
    if(req.query.id == null)
        res.send("No ID");
    else
        res.send(req.query.id);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});