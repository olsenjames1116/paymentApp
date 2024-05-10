require('dotenv').config();
import express, { Express, Request, Response } from 'express';

export const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
