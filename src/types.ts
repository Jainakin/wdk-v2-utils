/** Opaque key handle — an integer referencing a key in native memory */
export type KeyHandle = number;

/** Chain identifier */
export type ChainId = 'btc' | 'evm' | 'ton' | 'tron' | 'solana' | 'spark';

/** BIP-44 coin types */
export const CoinType: Record<ChainId, number> = {
  btc: 0,
  evm: 60,
  ton: 607,
  tron: 195,
  solana: 501,
  spark: 0,
};

/** Curve types */
export type CurveType = 'secp256k1' | 'ed25519';

/** Chain to curve mapping */
export const ChainCurve: Record<ChainId, CurveType> = {
  btc: 'secp256k1',
  evm: 'secp256k1',
  ton: 'ed25519',
  tron: 'secp256k1',
  solana: 'ed25519',
  spark: 'secp256k1',
};

/** Wallet state */
export type WalletState = 'created' | 'unlocked' | 'ready' | 'locked' | 'destroyed';

/** Transaction parameters (generic, chain modules extend this) */
export interface TxParams {
  chain: ChainId;
  to: string;
  amount: string;
  token?: string;
  memo?: string;
}

/** Unsigned transaction (opaque, chain-specific) */
export interface UnsignedTx {
  chain: ChainId;
  data: unknown;
  estimatedFee?: string;
}

/** Signed transaction */
export interface SignedTx {
  chain: ChainId;
  rawTx: Uint8Array | string;
  txHash?: string;
}

/** Transaction record (history) */
export interface TxRecord {
  txHash: string;
  chain: ChainId;
  from: string;
  to: string;
  amount: string;
  token?: string;
  timestamp: number;
  status: 'pending' | 'confirmed' | 'failed';
  blockNumber?: number;
}

/** Network configuration */
export interface NetworkConfig {
  chainId: ChainId;
  networkId: string;      // e.g., "mainnet", "testnet", "sepolia"
  rpcUrl: string;
  explorerUrl?: string;
  isTestnet: boolean;
}
