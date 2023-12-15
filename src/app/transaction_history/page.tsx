'use client';

import React, { useEffect, useState } from 'react';

const Transaction_History: React.FC = () => {
    const [transactions, setTransactions] = useState({});

    useEffect(() => {
        const fetchTransactions = async () => {
            const transactions = await fetch('/api/transaction_sync');
            const {data} = await transactions.json();

            setTransactions(data);
        }
        fetchTransactions();
    }, [])

    useEffect(() => {
        console.log("TRANSACTIONS", transactions);
    }, [transactions])

    return (
        <div>
            <h1>Transactions</h1>
        </div>
    )
}

export default Transaction_History;