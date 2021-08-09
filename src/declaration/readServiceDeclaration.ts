import { FunQLDeclaration, FunQLReqSchema } from "./../types/declaration.ts";
import { ServiceConfig } from "../types/servicesConfig.ts";

/**
 * get declaration file from specified local path or url
 * @note url has higher order than path
 */
export type readServiceDeclaration = (
  serviceConfig: ServiceConfig
) => FunQLDeclaration;
