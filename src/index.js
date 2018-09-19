const worker = new Worker("./worker.js", { type: "module" });

worker.onmessage = event => {
  console.log("response: " + event.data);
};

worker.postMessage(42);
