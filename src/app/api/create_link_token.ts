import { plaidClient } from "../lib/plaid";
import { CountryCode, Products } from "plaid";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        const tokenResponse = await plaidClient.linkTokenCreate({
            user: { client_user_id: process.env.PLAID_CLIENT_ID as string },
            client_name: "Expense Tracker",
            language: 'en',
            products: [Products.Auth], 
            country_codes: [CountryCode.Us]
        });

        return res.json(tokenResponse)

    } catch (error) {
        console.log('Error:', error );
    }
}
