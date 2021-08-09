import { ServiceInfo } from "./serviceInfo.ts";

/**
 * @interface
 * similar to FunQLReqSchema except that it has some details about available services for the considered doits and models
 */
export interface DispatcherDeclaration {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                serviceInfo: ServiceInfo;
                validationObj?: unknown;
                //defines priority of server
                priority?: number;
                details: { get?: unknown; set?: unknown };
              }[];
            };
          };
        };
      };
    };
  };
}

export interface FunQLDeclaration {
  reqSchema: FunQLReqSchema;
  validationObj?: unknown;
}

/**
 * request type of body in funql
 */
export type FunQLReqSchema = {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                details: { set: unknown; get: unknown };
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
