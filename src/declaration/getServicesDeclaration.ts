import { ServiceInfo } from "./../types/serviceInfo.ts";
import {
  FunQLResSchema,
  ServicesDeclaration,
} from "../types/servicesDeclaration.ts";

type ServiceDeclarationWithInfo = {
  serviceInfo: ServiceInfo;
  reqSchema: FunQLResSchema;
};

/**
 * gets a single file contains services declaration that specifies which service can handle which  contents models and doits
 * it also find out priority of each service
 */
type GetServicesDeclaration = (
  serviceDeclarations: ServiceDeclarationWithInfo[]
) => ServicesDeclaration;
