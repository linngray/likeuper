require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const { keep_alive } = require("./keep_alive");

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL);

    function isRestrictedTime() {
        const now = new Date();
        const hours = now.getUTCHours() + 3; // Добавляем 3 часа для перевода в московское время
        return (hours >= 1 && hours < 6);
    }

    async function bump() {
        if (isRestrictedTime()) {
            console.log('Skipping bump due to restricted time interval (Moscow time)');
            return;
        }
        await channel.sendSlash('575776004233232386', 'like');
        console.count('Liked!');
    }

    async function otherBump() {
        if (isRestrictedTime()) {
            console.log('Skipping otherBump due to restricted time interval (Moscow time)');
            return;
        }
        await channel.sendSlash('302050872383242240', 'bump');
        console.count('Bumped!');
    }

    function loop() {
        var randomNum = Math.round(Math.random() * (19800000 - 14400000 + 1)) + 14400000;
        setTimeout(function () {
            bump();
            loop();
        }, randomNum);
    }

    function otherLoop() {
        var randomNum = Math.round(Math.random() * (10800000 - 7200000 + 1)) + 7200000;
        setTimeout(function () {
            otherBump();
            otherLoop();
        }, randomNum);
    }

    bump();
    loop();
    otherBump();
    otherLoop();
});

client.login(process.env.TOKEN);

    otherLoop();
});

client.login(process.env.TOKEN);
