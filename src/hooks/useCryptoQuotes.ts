import { useEffect, useState } from 'react';
import { FetchStatus, Quote } from '../services/types';
import { getCryptoQuotes } from '../services/asset-service';

export function useCryptoQuotes() {
    const [quotes, setQuotes] = useState<Quote[]>();
    const [quotesFetchingStatus, setQuotesFetchingStatus] = useState<FetchStatus>('initial');

    useEffect(() => {
        const getQuotes = async () => {
            setQuotesFetchingStatus('fetching');
            try {
                const fetchedQuotes = await getCryptoQuotes();
                setQuotes(fetchedQuotes);
                setQuotesFetchingStatus('done');
            } catch {
                setQuotesFetchingStatus('error');
            }
        };
        getQuotes();
    }, []);

    return {
        quotes, quotesFetchingStatus,
    };
}
