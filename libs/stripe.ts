import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.sTRIPE_SECRET_KEY ?? '',
    {
        apiVersion: '2023-08-16',
        appInfo: {
            name: 'Spotify',
            version: '0.1.0'
        }
    }
);