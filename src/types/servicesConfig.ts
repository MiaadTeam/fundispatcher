import { ServiceInfo } from "./serviceInfo.ts";
export interface ServicesConfig {
  services: {
    [k: string]: {
      declarations: {
        path: string;
        url: string;
      };
      server: {
        url: string;
        port: string;
        autoRunning: {
          serverLocalLocation: string;
          cmd: string;
        };
      };
      authorization: {
        clientId: string;
        secret: string;
      };
    };
  };
}
