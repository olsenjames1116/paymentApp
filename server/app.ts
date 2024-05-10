require('dotenv').config();
import express, { Express, Request, Response } from 'express';
const { Pool } = require('pg');

const app: Express = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
});

app.get('/', (req: Request, res: Response) => {
	pool.query('SELECT * FROM "user"', (error: Error, results: any) => {
		if (error) throw error;
		res.json(results.rows);
	});
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
