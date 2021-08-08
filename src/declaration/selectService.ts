import { ServiceInfo } from "../types/serviceInfo.ts";
import { FunQLServiceResSchema } from "../types/servicesDeclaration.ts";

export type SelectServiceFromRequest = (
  request: FunQLServiceResSchema
) => ServiceInfo;
