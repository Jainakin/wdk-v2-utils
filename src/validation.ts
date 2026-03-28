/** Validate mnemonic word count */
export function isValidMnemonicLength(mnemonic: string): boolean {
  const words = mnemonic.trim().split(/\s+/);
  return [12, 15, 18, 21, 24].includes(words.length);
}

/** Validate a hex string */
export function isValidHex(hex: string): boolean {
  return /^(0x)?[0-9a-fA-F]*$/.test(hex) && hex.replace('0x', '').length % 2 === 0;
}

/** Parse an amount string (handles decimals) into a bigint with the given decimal places */
export function parseAmount(amount: string, decimals: number): bigint {
  if (!/^\d+(\.\d+)?$/.test(amount)) {
    throw new Error(`Invalid amount string: ${amount}`);
  }

  const parts = amount.split('.');
  const whole = parts[0];
  let fraction = parts[1] ?? '';

  if (fraction.length > decimals) {
    throw new Error(
      `Amount ${amount} has more than ${decimals} decimal places`
    );
  }

  // Pad or truncate fraction to the required decimal places
  fraction = fraction.padEnd(decimals, '0');

  return BigInt(whole + fraction);
}

/** Format a bigint amount to a decimal string with the given decimal places */
export function formatAmount(amount: bigint, decimals: number): string {
  const isNegative = amount < 0n;
  const abs = isNegative ? -amount : amount;
  const str = abs.toString().padStart(decimals + 1, '0');

  const wholepart = str.slice(0, str.length - decimals) || '0';
  const fracpart = str.slice(str.length - decimals);

  // Trim trailing zeros from fractional part
  const trimmed = fracpart.replace(/0+$/, '');

  const result = trimmed.length > 0 ? `${wholepart}.${trimmed}` : wholepart;
  return isNegative ? `-${result}` : result;
}
