import "dotenv/config";
import {Keypair } from "@solana/web3.js";
 
const keypair = Keypair.generate();
console.log("Private Key:", keypair.secretKey);
console.log("Public Key:",  keypair.publicKey.toBase58());