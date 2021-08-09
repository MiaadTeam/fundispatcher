import { FunQLReqSchema } from "./declaration.ts";
import { ServiceInfo } from "./serviceInfo.ts";
/**
 * @interface
 * represents a funql request declaration with information of service
 */
export type ServiceDeclarationWithInfo = {
  serviceInfo: ServiceInfo;
  reqSchema: FunQLReqSchema;
};
