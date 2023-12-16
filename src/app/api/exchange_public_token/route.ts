import { plaidClient } from "../../lib/plaid";
import { NextResponse } from "next/server";
import { sealData } from "iron-session";

export async function POST(request: Request) {
    try {
        const {public_token} = await request.json();
        const exchangeResponse = await plaidClient.itemPublicTokenExchange({
           public_token
        });
        
        const session = JSON .stringify({
            access_token: exchangeResponse.data.access_token
        });

        const encryptedSession = await sealData(session, {
            password: 'ioaifaifjioajewifeawfoajnifjnewfaewnnawonfianvnawrifnweofn'
        });

        const response = NextResponse.json('OK', {
            status: 200,
            headers: { 'Set-Cookie': `access_token=${encryptedSession}` }
        })

        return response;
        
    } catch (error) {
        console.log('Error:', error );
    }
}