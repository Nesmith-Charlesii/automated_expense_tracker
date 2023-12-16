// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/navigation';
// import { usePlaidLink } from "react-plaid-link";

// const App = () => {

//   const router = useRouter();
//   const [token, setToken] = useState(null)

//   useEffect(() => {

//     const createLinkToken = async () => {
//       // It is not good practice to cache tokens
//       const response = await fetch('/api/create_link_token', {cache: 'no-cache'});
//       const {data} = await response.json()
   
//       setToken(data.link_token);
//     }
    
//     createLinkToken();
//   }, [])

//   const onSuccess = useCallback(async (publicToken: string) => {
//     await fetch('/api/exchange_public_token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       cache: 'no-cache',
//       body: JSON.stringify({ public_token: publicToken }),
//     })
//     router.push('/transaction_history');
//   }, [])

//   const { open, ready } = usePlaidLink({
//     token,
//     onSuccess,
//   });
  

//   return (
//     <button onClick={() => open()} disabled={!ready}>
//       <strong>Link account</strong>
//     </button>
//   )
// }

// export default App;

const createLinkToken = async() => {
  const token = await fetch('http://localhost:3000/api/create_link_token', { cache: 'no-cache' });
  const { data } = await token.json();

  console.log("link_data:", data)
  return data.link_token
};

const onSuccess = async(linkToken: string) => {
  const exchangeLinkToken = await fetch('/api/exchange_public_token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-cache",
    body: JSON.stringify({linkToken})
  });
}

export default async function LinkAccout() {
  const token = await createLinkToken();

  // const { open, ready } = usePlaidLink({
  //   token,
  //   onSuccess
  // })

  return (
    <button>
      LINK ACCOUNT
    </button>
  )
}