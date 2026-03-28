export class WDKError extends Error {
  public readonly code: string;

  constructor(code: string, message: string) {
    super(message);
    this.name = 'WDKError';
    this.code = code;
  }
}

export class CryptoError extends WDKError {
  constructor(message: string) {
    super('CRYPTO_ERROR', message);
    this.name = 'CryptoError';
  }
}

export class NetworkError extends WDKError {
  public readonly statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super('NETWORK_ERROR', message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

export class StorageError extends WDKError {
  constructor(message: string) {
    super('STORAGE_ERROR', message);
    this.name = 'StorageError';
  }
}

export class ChainError extends WDKError {
  constructor(message: string) {
    super('CHAIN_ERROR', message);
    this.name = 'ChainError';
  }
}

export class ValidationError extends WDKError {
  constructor(message: string) {
    super('VALIDATION_ERROR', message);
    this.name = 'ValidationError';
  }
}

/** Error for invalid wallet state transitions */
export class StateError extends WDKError {
  constructor(message: string) {
    super('STATE_ERROR', message);
    this.name = 'StateError';
  }
}
