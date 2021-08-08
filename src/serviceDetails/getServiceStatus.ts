import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * 0 means service is down
 */
export type GetServiceStatus = (service: ServiceInfo) => number;
