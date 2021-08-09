import { ServiceDeclarationWithInfo } from "./../types/serviceDeclarationWithInfo.ts";
import { ServicesConfig } from "../types/servicesConfig.ts";

/**
 * this function  merge declaration into one file for request and response
 */
export type MergeDeclarations = (data: ServiceDeclarationWithInfo[]) => void;
