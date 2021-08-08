import { ServiceInfo } from "../types/serviceInfo.ts";
import { FunQLServiceReqSchema } from "../types/servicesDeclaration.ts";

/**
 * dispatch a request to selected service and also handling error
 */
export type DispatchRequest = (
  request: FunQLServiceReqSchema,
  selectedServiceInfo: ServiceInfo
) => void;
