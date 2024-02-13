const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("email to Anmol", {
    email: "bunny.shukla69@gmail.com",
    subject: "Welcome to Message-Queue Drill.",
    body: "Hey Anmol, Welcome to this tech park.",
  });
  console.log("Job added to queue", res.id);
}

init();
