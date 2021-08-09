import { ServiceInfo } from "./serviceInfo.ts";
import { FunQLResSchema } from "./servicesDeclaration.ts";
/**
 * @interface
 * represents a funql request declaration with information of service
 */
export type ServiceDeclarationWithInfo = {
  serviceInfo: ServiceInfo;
  reqSchema: FunQLResSchema;
};
