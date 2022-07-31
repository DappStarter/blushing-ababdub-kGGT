require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain clump gesture basket bubble series'; 
let testAccounts = [
"0xd43e71212396e747abdfc867bccdb0d64314c45701e06639ccdc2af3e0f9fc89",
"0x22d7b026c74cc4f4026d0f35f0bf7ccce2e5ad37cf65800b4e8ab520d19b4505",
"0xef1358113ec5e348a7a0f5eb033ae6a01756382a84582ba4f5e1af7073911f6d",
"0x93644595bdc1866f20e43b92a45316c0e259c8371fe2df80407186642c442971",
"0x6dd10f06c2b9b82676a12e7295e2d649bd0664c335280854b7ad66ec0da3cd74",
"0x0da8be0c58c72db9a8a19ddb4aee95ab5ee94fe127a2090ac8c9004183494e5e",
"0x7917a60efdc33c24d0e2833b47d3ec033c8b1da7ae82566d811c8d34b7719d24",
"0x1014414bc5e4dbb45b906f62864ee09c9cdf2ca559fbf61a837bf4d2faa9dac7",
"0x75f74693572b61b5440c8b546d651ba4b73e4149913ba8423aac27da7b939042",
"0x9f6191e53678095a51f148d85d0bfd0c76aac3d52e182b25a4f799e90e2dc9a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

