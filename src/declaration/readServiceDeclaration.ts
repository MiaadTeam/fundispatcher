import { FunQLDeclaration } from "./../types/declaration.ts";
import { ServiceConfig } from "../types/servicesConfig.ts";

/**
 * get declaration file from specified local path or url in service config
 * @note url has higher priority than path
 */
export type readServiceDeclaration = (
  serviceConfig: ServiceConfig
) => FunQLDeclaration;
