module.exports = client => {
    // When the bot connects print a message to the log with the bot's username, id, and number of connected servers.
    client.logger.info(`Connected as ${client.user.tag} (${client.user.id}). Connected to ${client.guilds.cache.size} server(s). `);
}