'use strict'

// Require all the outside stuff
const discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();
const client  = new discord.Client();
client.logger = require('./modules/logger.js').logger;
client.config = require('./config.json');
client.functions = require('./functions.js');

// Read the files in the /events dir to an array. Loop through the array and bind each file to an event. Ignores files not ending in .js or with no contents.
client.logger.info('Binding events');
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    if(!event.length) {
        client.logger.warn(`Skipping empty file: ./events/${file}`);
        delete require.cache[require.resolve(`./events/${file}`)];
        continue;
    }
    try {
        client.on(eventName, event.bind(null, client));
        client.logger.info(`Event bound: ${eventName}`);
        delete require.cache[require.resolve(`./events/${file}`)]; 
    }
    catch (error) {
        client.logger.error(error);
    }
}

// Read the files in the /commands dir to an array. Loop through the array and adds them to a collection of commands for execution later. Ignores files not ending in .js or with no contents.
if(fs.existsSync('./commands')) {
    client.logger.info('Loading commands');
    client.commands = new discord.Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        if (!command.execute.length) {
            client.logger.warn(`Skipping empty file: ./commands/${file}`);
            delete require.cache[require.resolve(`./commands/${file}`)];
            continue;
        }
        try {
            client.commands.set(command.name, command);
            client.logger.info(`Command loaded: ${command.name}`);
        }
        catch (error) {
            client.logger.error(error);
        }
    }
}

client.login();