function main() {
    console.log("Hello World! runs on Actions");
    for (let i = 0; i < 10; i++) {
        console.log("XD".repeat(i));

        const name = process.env.USERNAME;
        console.log(`Hello ${name}!`);
    }
}

main();
