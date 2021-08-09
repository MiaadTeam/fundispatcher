import { DispatcherDeclaration, FunQLReqSchema } from "../types/declaration.ts";
import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * determines appropriate service for this request with considering to priority of each service
 */
export type SelectServiceFromRequest = (
  request: FunQLReqSchema,
  dispatcherDeclaration: DispatcherDeclaration
) => ServiceInfo;
