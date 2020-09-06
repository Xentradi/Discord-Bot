const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const logger = createLogger({
    transports: [
        new transports.DailyRotateFile({
            filename: `./logs/combined_%DATE%.log`,
            datePattern: 'YYYY-MM-DD_HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            )
        }),
        new transports.DailyRotateFile({
            filename: `./logs/error_%DATE%.log`, level: 'error',
            datePattern: 'YYYY-MM-DD_HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            )
        }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        })
    ]
});

exports.logger = logger;