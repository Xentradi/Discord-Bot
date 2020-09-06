module.exports = {
	/**
	 * name - the keyword used to trigger the command when following the prefix
	 * description - not implimented yet
	 * execute - function to run when the command is called
	 */
	name: 'ping',
	description: 'Pong!',
	execute(client, message, args) {
		client.functions.commandReact(message, 1);
		message.channel.send('Ping?').then((m) => {
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        })	
	}
}