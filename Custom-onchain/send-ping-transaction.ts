/*import * as web3 from "@solana/web3.js";
import "dotenv/config"; // To read from .env file

// Function to get Keypair from secret key in .env
function getKeypairFromSecretKey(envVar) {
  const secretKeyBase64 = process.env[envVar]; // Read secret key from .env
  if (!secretKeyBase64) {
    throw new Error(`${envVar} not found in the environment variables`);
  }
  
  const secretKey = Uint8Array.from(Buffer.from(secretKeyBase64, "base64"));
  return web3.Keypair.fromSecretKey(secretKey);
}

// Manually handle airdrop if required
async function airdropIfRequired(connection, publicKey, amount, minBalance) {
  const currentBalance = await connection.getBalance(publicKey);
  console.log(`Current balance: ${currentBalance / web3.LAMPORTS_PER_SOL} SOL`);

  if (currentBalance < minBalance) {
    console.log(`Airdropping ${amount / web3.LAMPORTS_PER_SOL} SOL...`);
    const airdropSignature = await connection.requestAirdrop(publicKey, amount);
    await connection.confirmTransaction(airdropSignature);
    console.log("Airdrop successful!");
    return connection.getBalance(publicKey);
  }

  return currentBalance;
}

// Entry point of the script
(async () => {
  try {
    const payer = getKeypairFromSecretKey('SECRET_KEY2'); // SECRET_KEY from .env
    const connection = new web3.Connection(web3.clusterApiUrl('devnet')); // Connect to Solana devnet
    
    // Airdrop SOL if balance is below 0.5 SOL
    const newBalance = await airdropIfRequired(
      connection,
      payer.publicKey,
      1 * web3.LAMPORTS_PER_SOL,   // Airdrop 1 SOL if required
      0.5 * web3.LAMPORTS_PER_SOL  // Minimum balance 0.5 SOL
    );

    console.log(`New balance: ${newBalance / web3.LAMPORTS_PER_SOL} SOL`);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})(); */

import {
  Connection,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
 
const suppliedToPubkey = process.argv[2] || null;
 
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}
 
const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
 
console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
 
const toPubkey = new PublicKey(suppliedToPubkey);
 
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
 
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);