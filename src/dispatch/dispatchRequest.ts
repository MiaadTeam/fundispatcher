import { FunQLReqSchema } from "../types/declaration.ts";
import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * dispatch a request to selected service and also handling error
 * @remarks before runs this function, we should choose appropriate service with selectService function
 */
export type DispatchRequest = (
  request: FunQLReqSchema,
  header: Headers,
  selectedService: ServiceInfo
) => void;
