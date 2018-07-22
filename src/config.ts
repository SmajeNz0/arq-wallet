let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl: "http://127.0.0.1:1984/",
	mainnetExplorerUrl: "https://blocks.arqma.com/",
	testnetExplorerUrl: "",
	testnet: false,
	coinUnitPlaces: 9,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 18, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	coinSymbol: 'ARQ',
	openAliasPrefix: "arq",
	coinName: 'ArQmA',
	coinUriPrefix: 'arq:',
	addressPrefix: 0x2cca,
	integratedAddressPrefix: 0x116bc7,
	addressPrefixTestnet: 0x53ca,
	integratedAddressPrefixTestnet: 0x504a,
	subAddressPrefix: 0x6847,
	subAddressPrefixTestnet: 0x524a,
	feePerKB: new JSBigInt('2000000'),//20^10 - not used anymore, as fee is dynamic.
  dustThreshold: new JSBigInt('2000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
  txChargeRatio: 0.8,
  defaultMixin: 6, // minimum mixin for hardfork v7 is 6 (ring size 7)
  txChargeAddress: 'ar46iCiw5uB7SjnYhL5EJLP1LpqGkZbCcWhWgdbLL1c4DicNuYi3ZeRJPi8FFmEhYnagbxRyaQKyTYBA95JqmPcr1XZytK9o3',
  idleTimeout: 30,
  idleWarningDuration: 20,
  maxBlockNumber: 500000000,
  avgBlockTime: 240,
	debugMode: false,
};
