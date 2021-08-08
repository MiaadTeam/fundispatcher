import {
  FunQLServiceResSchema,
  ServicesDeclaration,
} from "../types/servicesDeclaration.ts";

type SingleServiceDeclaration = {
  serviceId: string;
  serviceName?: string;
  reqSchema: FunQLServiceResSchema;
};

type GetServiceDeclaration = (
  serviceDeclarations: SingleServiceDeclaration[]
) => ServicesDeclaration;

/**
 * gets a single file contains services declaration that specifies which service can handle which  contents models and doits
 */
export const getServicesDeclaration = () => {};
