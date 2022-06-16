const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

const {
  utils: { setJSON },
  testnetInfo,
} = require("@axelar-network/axelar-local-dev");
const { Wallet, getDefaultProvider } = require("ethers");
const { keccak256, defaultAbiCoder } = require("ethers/lib/utils");
const { GasCostLogger } = require("./gasCosts");
const { deploy2 } = require("../examples/cross-chain-token/index");

const serviceAccount = require("./ballstreetdao-firebase-adminsdk-zgwut-167257fe48.json");
// import { propose, queueAndExecute, vote } from "./utils";

initializeApp({
  credential: cert(serviceAccount),
});

const env = process.argv[3];
if (env == null || (env != "testnet" && env != "local"))
  throw new Error(
    "Need to specify tesntet or local as an argument to this script."
  );
let temp;
if (env == "local") {
  temp = require(`../info/local.json`);
} else {
  try {
    temp = require(`../info/testnet.json`);
  } catch {
    temp = testnetInfo;
  }
}
const chains = temp;

const private_key = keccak256(
  defaultAbiCoder.encode(
    ["string"],
    [
      "this is a random string to get a random account. You need to provide the private key for a funded account here.",
    ]
  )
);
const wallet = new Wallet(private_key);

const db = getFirestore();

const cards = {};

db.collection("proposals").onSnapshot(async (snap) => {
  const docs = snap.docs
    .filter((doc) => !cards[doc.id] && doc.data().status !== "proposed")
    .map((doc) => ({ id: doc.id, ...doc.data(), doc }));

  docs.forEach(async (doc) => {
    const docData = (cards[doc.id] = doc);

    (async () => {
      const promises = [];
      for (const name in chains) {
        const rpc = chains[name].rpc;
        const provider = getDefaultProvider(rpc);
        promises.push(deploy2(chains[name], wallet.connect(provider),
          { name: docData.description, symbol: docData.name, amount: promises.length === 0 ? docData.amount : '0' }));
      }
      await Promise.all(promises);
      setJSON(chains, `./info/${env}.json`);
    })();

    await doc.doc.ref.update({ status: "minted" });
  });

});
