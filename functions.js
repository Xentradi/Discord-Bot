const config = require('./config.json');
const message = require('../bot-HeroManhua/events/message');

module.exports = {
    /**
     * Check if a member is the bot owner
     * @param member - Discord member object
     * @returns True or False if members id matches the id of the bot owner stored in config
     */
    botOwner: (member) => {
        if (config.owner !== member.id) return false;
        return true;
    },

    /**
     * Check if a member has permission to do something.
     * @param member - Discord member object to check permission for.
     * @param permissionNode - Discord permission node to check if allowed.
     * @returns True if member has the necessary permission.
     */
    hasPermission: (member, permissionNode) => {
        return member.hasPermission(permissionNode.toUpperCase());
    },

    /**
     * React to a message with a thumbs up or thumbs down
     * @param message - Discord message object of the message to react to.
     * @param status - 0 or 1 reacts with 👎 or 👍
     */

    commandReact: (message, status) => {
        if (status === 0) return message.react('👎');
        return message.react('👍')
    }
};