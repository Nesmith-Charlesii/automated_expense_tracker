import { plaidClient } from "@/app/lib/plaid";
import { RemovedTransaction, Transaction } from "plaid";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        let dbCursor = null;

        let added: Array<Transaction> = [];
        let modified: Array<Transaction> = [];

        let removed: Array<RemovedTransaction> = [];
        let hasMore = true;

        let response;

        while (hasMore) {
            let {access_token, cursor} = await request.json();
            response = await plaidClient.transactionsSync({
                access_token,
                cursor
            });
            const {data} = response;

            added = added.concat(data.added);
            modified = modified.concat(data.modified);
            removed = removed.concat(data.removed);

            hasMore = data.has_more;

            dbCursor = data.next_cursor;
        };

        NextResponse.json({response});

        // Persist cursor and updated data
        // database.applyUpdated(itemId, added, modified, removed, cursor);

        
    } catch(error) {
        console.log('ERROR:', error);
    }
}
