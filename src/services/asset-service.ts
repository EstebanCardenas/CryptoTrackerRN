import { Quote } from "./types";
import Config from "react-native-config";

const BASE_URL = 'https://pro-api.coinmarketcap.com';
const API_KEY = Config.API_KEY ?? '';

export async function getCryptoQuotes(): Promise<Quote[]> {
    try {
        const res = await fetch(`${BASE_URL}/v1/cryptocurrency/listings/latest`, {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY ?? '',
            },
        });
        const json = await res.json();
        if (res.status !== 200) {
            throw new Error(`Unsuccessful status code - ${res.status}: ${JSON.stringify(json)}`);
        }
        const data = json.data;
        return data;
    } catch (e) {
        console.error(e);
        throw new Error(`Failed to fetch crypto quotes: ${e}`);
    }
}
