module.exports = {

    /**
     * Vous permet de transformer le texte donné, et de le renvoyer dans votre salon
     * @param {any} message - Paramètre de votre événnement 'message'
     * @param {string} text - Le texte à transformer
     * @returns {string} Le texte transformé
     */

    block: (message, text) => {
        if(!message) throw new Error('Vous devez indiquer le paramètre de votre événnement "message" !');

        if(!text) throw new Error('Vous devez indiquer le texte qui sera transformé');
        if(typeof text !== "string") throw new Error('La valeur "text" doit être de type String');

        text = text.toLowerCase()
            .replace(/[a-z]/g, ":regional_indicator_$&:")
            .replace(/1/g, ":one:")
            .replace(/2/g, ":two:")
            .replace(/3/g, ":three:")
            .replace(/4/g, ":four:")
            .replace(/5/g, ":five:")
            .replace(/6/g, ":six:")
            .replace(/7/g, ":seven:")
            .replace(/8/g, ":eight:")
            .replace(/9/g, ":nine:")
            .replace(/0/g, ":zero:");
        
        return message.channel.send(text);
    }
    
};