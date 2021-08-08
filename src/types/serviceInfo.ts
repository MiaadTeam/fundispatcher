/**
 * that is used to dispatch request to selected service
 */
export interface ServiceInfo {
  /**
   * it from name from services service
   */
  name: string;
  /**
   * id should assign in fun dispatcher logic
   */
  id: string;
  server: {
    url: string;
    port: string;
  };
  authorization: {
    clientId: string;
    secret: string;
  };
}
