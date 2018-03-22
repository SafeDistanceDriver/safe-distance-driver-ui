export interface Environment {
  production: boolean;
  urls: {
    stats: string;
    newerThan: string;
  };
}
