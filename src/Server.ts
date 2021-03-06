import { Configuration, Inject } from '@tsed/di';
import { PlatformApplication } from '@tsed/common';
import '@tsed/platform-express';
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as cookieParser from 'cookie-parser';
import * as methodOverride from 'method-override';
import * as cors from 'cors';
import '@tsed/ajv';
import '@tsed/swagger';
export const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ['application/json'],
  httpPort: process.env.PORT || 3000,
  httpsPort: false,
  mount: {
    '/': [`${rootDir}/controllers/**/*.ts`],
  },
  swagger: [
    {
      path: '/docs',
    },
  ],
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  $beforeRoutesInit(): null {
    this.app
      .use(cors())
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );

    return null;
  }
}
