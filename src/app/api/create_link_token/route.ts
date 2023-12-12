import { plaidClient } from "../../lib/plaid";
import { CountryCode, Products } from "plaid";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        
        const tokenResponse = await plaidClient.linkTokenCreate({
            user: { client_user_id: process.env.PLAID_CLIENT_ID as string },
            client_name: "Expense Tracker",
            language: 'en',
            products: [Products.Auth], 
            country_codes: [CountryCode.Us]
        });
        const {data} = tokenResponse;

        return NextResponse.json({data});
        
    } catch (error) {
        console.log('Error:', error );
    }
}