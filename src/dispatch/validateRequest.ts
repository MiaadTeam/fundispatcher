import { DispatcherDeclaration, FunQLReqSchema } from "../types/declaration.ts";
import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * validate request before dispatching it to selected server if admin wants this feature
 */
export type validateRequest = (
  request: FunQLReqSchema,
  selectedService: ServiceInfo,
  dispatcherDeclaration: DispatcherDeclaration
) => boolean;
