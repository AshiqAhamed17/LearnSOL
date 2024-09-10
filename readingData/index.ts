import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";

const connection = new Connection('https://api.devnet.solana.com ');
const address  = new PublicKey('7UsN2ocFdUA89xp5KQ3eterTnChJreXgmuhaoyaKqxG7'); 
const balance = await connection.getBalance(address);
console.log(`The balance of the account at ${address} is ${balance / LAMPORTS_PER_SOL} lamports`);
console.log(`✅ Finished!`);

