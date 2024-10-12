import { v4 as uuidv4 } from "uuid";

export function generateDocumentID(n: number): string {
  const uuid = uuidv4().replace(/-/g, "").substring(0, n);
  return uuid;
}

export function generateLineID(): string {
  return uuidv4();
}
