export interface ServiceInfo {
  name: string;
  /**
   * id should assign in fun dispatcher logic
   */
  id: string;
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
}
