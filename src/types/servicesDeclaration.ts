import { ServiceInfo } from "./serviceInfo.ts";

export interface ServicesDeclaration {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                serviceInfosWithDetails: {
                  serviceInfo: ServiceInfo;
                  details: { get?: unknown; set?: unknown };
                }[];
              };
            };
          };
        };
      };
    };
  };
}

export type FunQLReqSchema = {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                details: { get?: unknown; set?: unknown };
              };
            };
          };
        };
      };
    };
  };
};
/**
 * response type of body in funql
 */
export type FunQLResSchema = {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                details: { response: unknown };
              };
            };
          };
        };
      };
    };
  };
};
