import { taResource } from "./ta";
import { tnResource } from "./tn";
import { tqResource } from "./tq";
import { twResource } from "./tw";
import { twlResource } from "./twl";
import type { ScribeResource } from "./types";

export { tnResource } from "./tn";
export { twlResource } from "./twl";

export const registeredResources: ScribeResource[] = [
  twResource,
  tnResource,
  twlResource,
  taResource,
  tqResource,
];
