export interface ServicesConfig {
  services: {
    [k: string]: ServiceConfig;
  };
}

export interface ServiceConfig {
  declarations: {
    path?: string;
    url?: string;
  };
  server: {
    url: string;
    port: string;
    localAutoRunning?: {
      serverLocalLocation: string;
      cmd?: string;
    };
  };
  authorization?: {
    clientId: string;
    secret?: string;
  };
}
