import { plaidClient } from "../../lib/plaid";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {public_token} = await request.json();
        const exchangeResponse = await plaidClient.itemPublicTokenExchange({
           public_token
        });
        
        return NextResponse.json({exchangeResponse});
        
    } catch (error) {
        console.log('Error:', error );
    }
}