import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//for class concatenation
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

//utility function to format size in different formats
export const formatSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  // determine the appropriate unit
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // divide by the unit and round to 2 decimals
  const size = bytes / Math.pow(k, i);

  return `${size.toFixed(2)} ${sizes[i]}`;
};

//generateUUID
export const generateUUID = (): string => crypto.randomUUID();
