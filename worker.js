const { Worker } = require("bullmq");

const worker = new Worker("email-queue", async (job) => {
  console.log(`Message Rec with id: ${job.id}`);
  console.log("Processing Message...");
  console.log(`Sending email to ${job.data.email}`);
  return new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));
});
