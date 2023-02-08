const crypto = require('crypto');
const algorithm = 'aes 192 cbc';
const password = "passowrd used to generate key";

const key = crypto.scryptSync(password,'salt',24);
const iv=Buffer.alloc(16,0)
const decipher = crypto.createDecipheriv(algorithm,key,iv);

const encrypted="'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa";

let fail = decipher.update(encrypted,'hex','utf8');

fail +=decipher.final('utf8');
console.log(final);