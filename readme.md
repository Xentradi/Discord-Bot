# Discord Bot Template

This is a barebones template I use for quickly setting up a new Discord bot project.s` 

## Features
- Leveled logging with daily rotating log files that are auto archived up to 14 days.
- Event loader. Each API event is handled by its own file in the `/events` directory.
- Command loader. Automatically load commands from the `/commands` directory.
- Some common functions that I tend to use a lot with my bots.
- It's a template, go make the anything else.

## Usage

- Download (and extract if necessary).
- Change the things you'd like in `package.json` Don't mess with dependencies unless you know what you're doing.
- Run `npm install`
- Set your `DISCORD_TOKEN` environment variable. Instructions below.
- Edit `config.json` to set your prefix and Discord user ID.
- Start the bot (`npm start`, `node .`, `node index.js`, etc)


### Bot Token
It uses an environment variable to store the bot token. Replace the placeholder text in `.env-sample` with your bot token; then rename the file to `.env`
```env
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN_HERE
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT License](https://choosealicense.com/licenses/mit/)
