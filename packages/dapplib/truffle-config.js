require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth soccer pull grace industry surge siege'; 
let testAccounts = [
"0x4d9adb041a4335f4d7de10467a92be46b3d4820600195ac0c18761ec2e8486b7",
"0x21584c84adfa83dbb3e5b8dcf32381c605660d2030b4bda1287925c0ccc63069",
"0xb7f7897c072faa1b9e0b68fb99d9ba441ff490f660f346ce9d1a940f545542d0",
"0x7151a5346260ef02006e2e5e0d25ca794e93869c80d0625c749979956ead7993",
"0xcd6352ad2227245ab48b5a3b332b78870759c86419a2535c2e0e81213be0d579",
"0x968b0abf705934f23d148d674eb3ba91f1140c1500b75ce6fcf62c783f06be63",
"0x48d197039b501d8fedabd6371d361e0f4d6e6d723f2be258cb484a7f6719887b",
"0x6e00d32b5a72451b9aa3776e731e13364841de5488c0eb8719459c9c3b529a47",
"0x79e687f2d864f07e6fe2b7a9b6a8d6d414701cf1291bcf127c5557ead145cf9e",
"0xf92802b3d2865e7f46c0e5bdff41c2744d88f3c184f19d76b263844e51ec0696"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
