import { ServicesConfig } from "../types/servicesConfig.ts";

/**
 * this function gives read services config and merge them into one file for request and response
 */
export type MergeDeclarations = (config: ServicesConfig) => void;
