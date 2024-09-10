import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";

const connection = new Connection('https://api.devnet.solana.com ');
const publickey  = new PublicKey('7UsN2ocFdUA89xp5KQ3eterTnChJreXgmuhaoyaKqxG7'); 
const balanceInLamports = await connection.getBalance(publickey);
const balanceSol = balanceInLamports/LAMPORTS_PER_SOL;
console.log(`💰 Finished! The balance for the wallet at address ${publickey} is ${balanceSol}!`);

