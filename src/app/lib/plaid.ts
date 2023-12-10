import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const plaidEnvironment = process.env.PLAID_ENV || 'sandbox';

const plaidClient = new PlaidApi (
    new Configuration({
        basePath: PlaidEnvironments[plaidEnvironment],
        baseOptions: {
            headers: {
                'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
                'PLAID-SECRET': process.env.PLAID_SECRET,
                'Plaid-Version': '2020-09-14',
            }
        }
    })
)

export {
    plaidClient
}