const { generateKeyPair } = require('jose/util/generate_key_pair');
const { fromKeyLike } = require('jose/jwk/from_key_like');

(async () => {
    const { privateKey } = await generateKeyPair('RS256');
    const jwk = await fromKeyLike(privateKey);
    console.log(JSON.stringify(jwk));
})();

// $ npm install jose
// $ node generate-jwks.js | openssl base64 | tr -d '\n' | pbcopy