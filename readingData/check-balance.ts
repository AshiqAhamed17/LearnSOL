import {
  Connection,
  PublicKey,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection('https://api.devnet.solana.com');

async function getBalance(publicKeyString) {
  try {
      const publicKey = new PublicKey(publicKeyString);
      const balanceInLamports = await connection.getBalance(publicKey);
      const balanceSol = balanceInLamports / LAMPORTS_PER_SOL;

      console.log(`💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceSol} SOL!`);
  } catch (error) {
      if (error instanceof Error && error.message.includes("Invalid public key input")) {
          console.error("🚨 Error: The provided wallet address is invalid.");
      } else {
          console.error("🚨 Error: An error occurred while fetching the balance.", error);
      }
  }
}

getBalance('7UsN2ocFdUA89xp5KQ3eterTnChJreXgmuhaoyaKqxG7');