import { ServiceInfoWithDeclaration } from "./../types/serviceInfoWithDeclaration.ts";
import { FunQLDeclaration } from "./../types/declaration.ts";
import { ServiceConfig } from "../types/servicesConfig.ts";

/**
 *
 * @remarks it also assign a unique id and for each service
 */
export type constructServiceDeclarationWithInfo = (
  name: string,
  serviceConfig: ServiceConfig,
  declaration: FunQLDeclaration
) => ServiceInfoWithDeclaration;
