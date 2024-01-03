import express, { Request, Response } from 'express';

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
