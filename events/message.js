module.exports = (client, message) => {
    // Ignore other bots
    if (message.author.bot) return;
    // Built-in convenince command that will reply with the bots default prefix as defined in the config
    if (message.content.toLowerCase() === `?prefix`) return message.reply(client.config.defaultPrefix);
    // If the message doesn't start with the prefix ignore it and end quietly.
    if (!message.content.startsWith(client.config.defaultPrefix)) return;

    // Remove the prefix, split the remaining content into an array based on whitespace. 
    const arguements = message.content
        .slice(client.config.defaultPrefix.length)
        .trim()
        .split(/ +/);
    // The command name is stored in arguements[0] store it in the commands variable and remove it from the array
    const command = arguements.shift().toLowerCase();
    
    // Exit quietly if the command doesn't exist
    if(!client.commands.has(command)) return;
    try {
        // Run the execute function of the command
        client.commands.get(command).execute(client, message, arguements);
    }
    catch (error) {
        // Catch and log errors generated when trying to run the command
        client.logger.error(error)
    }
}