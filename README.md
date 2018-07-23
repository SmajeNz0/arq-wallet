# Official ArQmA Web Wallet - Fully client side 
This web wallet is doing everything on the client side to give the best privacy to users.
The server is currently only used to optimize the communication with the daemon and compress the blockchain.  

This requirement may be removed in the future once daemons evolved and returns enough data 

# Security
**No keys, seed or sensitive data are sent to the server**  
If you find a potential security issue, please contact us so we can patch it as soon as possible.  
Encryption is done with a certified library, [Tweetnacl.Js](https://github.com/dchest/tweetnacl-js)

# Contributors and thanks
Developers:
- gnock (main)
- cryptochangements

Translations:
- english: too many peoples
- french: gnock
- serbian cyrillic: girugameshh
- german: F0sching

# Contributing
- You can help Masari by translation the wallet in your native language, it's really easy !  
Read [the guide](TRANSLATIONS.md) to get instructions on how to do that
- Report bugs & ideas to help us improve the web wallet by opening an issue 
- [Make a donation to Masari](https://www.myarqma.com/#!donate)

# Forks / Other coin
The ArQmA Web Wallet is a fork of Masari Web Wallet.

If you are a dev of a cryptonight/monero fork and would like to get a fork, please contact (@gnock on the [official discord](https://discord.gg/eSb9ZdM)).

Depending of your coin specificities, gnock can provide support, maintenance and development/updates for a payment in return, crypto only.
If you are not willing to pay for this service, please do not contact him.

The code is readable, it should be enough for you to use it.

# Features (non-exhaustive)
- complete wallet sync without server side processing for security
- receive/send history
- mempool support to check incoming transfers
- send coin, qr code scanning included, subaddress support
- receive page to generate a custom qr code
- import from private keys, mnemonic, json file (exported by the wallet)
- export keys, mnemonic phrase, json file (which include all the history)
- view only wallet
- basic network stats

# Roadmap
See github issues
