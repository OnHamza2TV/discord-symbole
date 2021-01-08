# DISCORD-SYMBOLE

> **Ce module vous permet de transformez vos textes en caractères spéciaux parfois amusant !**

## Installer le module
```
npm i discord-symbole
```

## Utilisation
Ce module **très simple d'utilisation** vous permettra de transformez votre texte en symboles spéciaux tels que blocks, ascii-art, bold,... Tout cela en une seule ligne !
```js
const { block } = require("discord-art");
const Discord = require('discord.js');

const client = new Discord.Client();

const settings = {
  token: "TOKEN DE VOTRE BOT",
  prefix: "PREFIX DE VOTRE BOT"
};

// Transformation en block :
client.on('message', async message => {
  if(message.content.startsWith(`${settings.prefix}block`)) {
    block(message, "le texte ici");
  }
});

client.login(settings.token);
```

## Auteur
> **On Hamza** | Discord: **On Hamza#9999** (ID: `686172394683236406`)

* GitHub : [Cliquez ici](https://github.com/OnHamzaYT)

## 📝 License
© On Hamza - 2020-2021

> Ce projet est sous license **MIT**.
