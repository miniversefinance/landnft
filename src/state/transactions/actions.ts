import { createAction } from '@reduxjs/toolkit';
// import { ChainId } from '@uniswap/sdk';
import { ChainId } from '@spookyswap/sdk';

export interface SerializableTransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  blockHash: string;
  transactionHash: string;
  blockNumber: number;
  status?: number;
}

export const addTransaction = createAction<{
  chainId: 250;
  hash: string;
  from: string;
  approval?: { tokenAddress: string; spender: string };
  summary?: string;
}>('transactions/addTransaction');

export const clearAllTransactions = createAction<{ chainId: 250 }>('transactions/clearAllTransactions');

export const finalizeTransaction = createAction<{
  chainId: 250;
  hash: string;
  receipt: SerializableTransactionReceipt;
}>('transactions/finalizeTransaction');

export const checkedTransaction = createAction<{
  chainId: 250;
  hash: string;
  blockNumber: number;
}>('transactions/checkedTransaction');
