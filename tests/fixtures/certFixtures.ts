import fs from 'fs';
import path from 'path';
import { fc } from '@fast-check/jest';

function fixturePath(name: string) {
  return {
    certChainFromPemFile: path.resolve(path.join(__dirname, `certs/${name}.crt`)),
    privKeyFromPemFile: path.resolve(path.join(__dirname, `certs/${name}.key`)),
  }
}

// Certificate fixtures
const tlsConfigFileRSA1 = fixturePath('rsa1');
const tlsConfigFileRSA2 = fixturePath('rsa2');
const tlsConfigFileOKP1 = fixturePath('okp1');
const tlsConfigFileOKP2 = fixturePath('okp2');
const tlsConfigFileECDSA1 = fixturePath('ecdsa1');
const tlsConfigFileECDSA2 = fixturePath('ecdsa2');


/**
 * This is a RSA key signed cert generated using step-cli
 * This is example 1
 */
const tlsConfigMemRSA1 = {
  certChainPem: fs.readFileSync(tlsConfigFileRSA1.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileRSA1.privKeyFromPemFile).toString(),
};

/**
 * This is a RSA key signed cert generated using step-cli
 * This is example 2
 */
const tlsConfigMemRSA2 = {
  certChainPem: fs.readFileSync(tlsConfigFileRSA2.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileRSA2.privKeyFromPemFile).toString(),
};

/**
 * This is a Ed25519 (OKP) key signed cert generated using step-cli
 * This is example 1
 */
const tlsConfigMemOKP1 = {
  certChainPem: fs.readFileSync(tlsConfigFileOKP1.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileOKP1.privKeyFromPemFile).toString(),
};

/**
 * This is a Ed25519 (OKP) key signed cert generated using step-cli
 * This is example 2
 */
const tlsConfigMemOKP2 = {
  certChainPem: fs.readFileSync(tlsConfigFileOKP2.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileOKP2.privKeyFromPemFile).toString(),
};

/**
 * This is a ECDSA key signed cert generated using step-cli
 * This is example 1
 */
const tlsConfigMemECDSA1 = {
  certChainPem: fs.readFileSync(tlsConfigFileECDSA1.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileECDSA1.privKeyFromPemFile).toString(),
};

/**
 * This is a ECDSA key signed cert generated using step-cli
 * This is example 2
 */
const tlsConfigMemECDSA2 = {
  certChainPem: fs.readFileSync(tlsConfigFileECDSA2.certChainFromPemFile).toString(),
  privKeyPem: fs.readFileSync(tlsConfigFileECDSA2.privKeyFromPemFile).toString(),
};

const tlsConfigRSAExampleArb = fc.oneof(
  fc.constant(tlsConfigFileRSA1),
  fc.constant(tlsConfigFileRSA2),
  fc.constant(tlsConfigMemRSA1),
  fc.constant(tlsConfigMemRSA2),
)

const tlsConfigECDSAExampleArb = fc.oneof(
  fc.constant(tlsConfigFileECDSA1),
  fc.constant(tlsConfigFileECDSA2),
  fc.constant(tlsConfigMemECDSA1),
  fc.constant(tlsConfigMemECDSA2),
)

const tlsConfigOKPExampleArb = fc.oneof(
  fc.constant(tlsConfigFileOKP1),
  fc.constant(tlsConfigFileOKP2),
  fc.constant(tlsConfigMemOKP1),
  fc.constant(tlsConfigMemOKP2),
)

const tlsConfigExampleArb = fc.oneof(
  tlsConfigRSAExampleArb,
  tlsConfigECDSAExampleArb,
  tlsConfigOKPExampleArb,
)


export {
  tlsConfigFileRSA1,
  tlsConfigFileRSA2,
  tlsConfigFileOKP1,
  tlsConfigFileOKP2,
  tlsConfigFileECDSA1,
  tlsConfigFileECDSA2,
  tlsConfigMemRSA1,
  tlsConfigMemRSA2,
  tlsConfigMemOKP1,
  tlsConfigMemOKP2,
  tlsConfigMemECDSA1,
  tlsConfigMemECDSA2,
  tlsConfigRSAExampleArb,
  tlsConfigECDSAExampleArb,
  tlsConfigOKPExampleArb,
  tlsConfigExampleArb,
}