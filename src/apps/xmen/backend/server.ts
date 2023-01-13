import compress from 'compression';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express, { Express, Request, Response } from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import Logger from '../../../contexts/shared/domain/Logger';
import container from './di';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';

const corsOptions: cors.CorsOptions = {
  origin: '*'
};

export class Server {
  private express: Express;
  readonly port: string;
  private logger: Logger;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.logger = container.get('Shared.Logger');
    this.express = express();

    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    const router = Router();
    router.use(cors(corsOptions));
    if (process.env.NODE_ENV != 'production') {
      router.use(errorHandler());
    }

    this.express.use(router);
    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      this.logger.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        this.logger.info(`  Backoffice Backend App is running on port ${this.port}`);
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    });
  }
}
