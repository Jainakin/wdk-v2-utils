declare const native: {
  encoding: {
    hexDecode(hex: string): Uint8Array;
    hexEncode(data: Uint8Array): string;
  };
};

/** Concatenate multiple Uint8Arrays */
export function concat(...arrays: Uint8Array[]): Uint8Array {
  let totalLength = 0;
  for (const arr of arrays) {
    totalLength += arr.length;
  }
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

/** Check if two Uint8Arrays are equal */
export function equals(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

/** Compare two Uint8Arrays lexicographically */
export function compare(a: Uint8Array, b: Uint8Array): number {
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] < b[i]) return -1;
    if (a[i] > b[i]) return 1;
  }
  if (a.length < b.length) return -1;
  if (a.length > b.length) return 1;
  return 0;
}

/** Convert hex string to Uint8Array (uses native.encoding) */
export function fromHex(hex: string): Uint8Array {
  return native.encoding.hexDecode(hex);
}

/** Convert Uint8Array to hex string (uses native.encoding) */
export function toHex(data: Uint8Array): string {
  return native.encoding.hexEncode(data);
}

/** Create a Uint8Array of n zero bytes */
export function zeros(n: number): Uint8Array {
  return new Uint8Array(n);
}

/** Convert a UTF-8 string to Uint8Array */
export function fromString(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

/** Convert Uint8Array to UTF-8 string */
export function toString(data: Uint8Array): string {
  return new TextDecoder().decode(data);
}
