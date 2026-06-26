process.on("unhandledRejection", err => {
    console.log("UNHANDLED REJECTION:", err);
});

process.on("uncaughtException", err => {
    console.log("UNCAUGHT EXCEPTION:", err);
});
