import { Environment } from '.';

export const environment: Environment = {
  production: false,
  urls: {
    stats: 'http://codejam.zrimsek.com/api/stats',
    newerThan: 'http://codejam.zrimsek.com/api/stats?newerThan='
  }
};
