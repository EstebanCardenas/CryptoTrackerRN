export interface Quote {
    id: number;
    name: string;
    symbol: string;
    quote: {
        USD: {
            price: number;
        };
    };
};

export type FetchStatus = 'initial' | 'fetching' | 'done' | 'error';
