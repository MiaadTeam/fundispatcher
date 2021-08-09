import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * @remarks 0 means service is down
 */
export type GetServiceStatus = (service: ServiceInfo) => number;
