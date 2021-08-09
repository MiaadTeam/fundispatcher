import { ServiceInfoWithDeclaration } from "./../types/serviceInfoWithDeclaration.ts";
/**
 * this function merge declaration into one file for request and response to use client from it for type safety.
 */
export type MergeDeclarations = (
  serviceInfoWithDeclarations: ServiceInfoWithDeclaration[],
  options?: { path?: string }
) => void;
