#!/usr/bin/env node

import readlineSync from "readline-sync";

console.log("\n🚀 Namra AI Terminal\n");

const question = readlineSync.question("Ask AI: ");

async function askAI() {

  try {

    const response = await fetch(
      "https://chat-api.patelnamra573.workers.dev",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer namra-secret"
        },

        body: JSON.stringify({
          question
        })
      }
    );

    const data = await response.json();

    console.log("\n🤖 Gemma 4 31B:\n");

    console.log(data.reply);

  } catch (err) {

    console.log("\nError:");
    console.log(err.message);

  }

}

askAI();
