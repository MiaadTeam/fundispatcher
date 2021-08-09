import { ServiceInfo } from "../types/serviceInfo.ts";

/**
 * determine situation of the service and return a number that represents condition of service
 * @remarks 0 means service is down
 */
export type GetServiceStatus = (service: ServiceInfo) => number;
