import { DispatcherDeclaration } from "../../types/declaration.ts";

/**
 * a place for storing constructed dispatcher declaration
 * @todo we can use isdb
 * @remarks we store it because we should construct it one time
 */
let dispatcherDeclaration: DispatcherDeclaration;
