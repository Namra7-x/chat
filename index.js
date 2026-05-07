#!/usr/bin/env node

import readlineSync from "readline-sync";

const question =
  process.argv.slice(2).join(" ")
  || readlineSync.question("Ask AI: ");

try {

  const response = await fetch(
    "https://YOUR-WORKER.workers.dev",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        question
      })
    }
  );

  const data = await response.json();

  // FULL DEBUG
  console.log("\nDEBUG RESPONSE:\n");
  console.log(JSON.stringify(data, null, 2));

  // SUCCESS
  if (data.success) {

    console.log("\n🤖 AI:\n");
    console.log(data.reply);

  } else {

    console.log("\n❌ ERROR:\n");
    console.log(data.error);

  }

} catch (err) {

  console.log("\n❌ CLIENT ERROR:\n");
  console.log(err.message);

}
