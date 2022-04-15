if (!process.argv[2]) {
    console.log("❌ Need a JWT as the second argument");
    process.exit(1);
}

const jwtHeader = process.argv[2].split(".")[0];
const jwtPayload = process.argv[2].split(".")[1];
const headerDecoded = Buffer.from(jwtHeader, "base64").toString("utf8");
const payloadDecoded = Buffer.from(jwtPayload, "base64").toString("utf8");

console.log("");
console.log("This JWT has _not_ been validated!");
console.log("");
console.log("Header:");
console.log(headerDecoded);
console.log("");
console.log("Payload:");
console.log(payloadDecoded);

// $ node decode-jwt.js JWT_HERE