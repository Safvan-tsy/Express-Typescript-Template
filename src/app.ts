import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import { Request} from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors'

const app: Express = express();

app.use(helmet());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(cors());
app.options('*', cors());

app.all('*', (req: Request) => {
    throw new Error(`Can't find ${req.originalUrl} on this server!`)
})

export default app;