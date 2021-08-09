import { DispatcherDeclaration } from "../types/declaration.ts";
import { ServiceInfoWithDeclaration } from "./../types/serviceInfoWithDeclaration.ts";
/**
 * gets a single file contains services declaration that specifies which service can handle which contents models and doits
 * it also determines priority of each service according to some condition
 */
type ConstructDispatcherDeclaration = (
  serviceDeclarations: ServiceInfoWithDeclaration[]
) => DispatcherDeclaration;
