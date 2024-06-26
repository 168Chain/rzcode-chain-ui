// types.d.ts
export interface Block {
    height: number;
    nonce: number;
    data: string;
    hash: string;
    previous: string;
}

export interface TxBlock {
    height: number;
    nonce: number;
    txs: Tx[];
    hash: string;
    previous: string;
}

export interface MiniBlock {
    height: number;
    nonce: number;
    award: number,
    txs: Tx[];
    miner: string;
    hash: string;
    previous: string;
}

export interface Tx {
    fm: string,
    to: string,
    amt: number
}