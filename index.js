require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const client = new Client()
const { keep_alive } = require("./keep_alive");

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL)
    
    async function bump() {
        await channel.sendSlash('575776004233232386', 'like')
        console.count('Liked!')
    }

    function loop() {
        // Prevent Detection
        var randomNum = Math.round(Math.random() * (18000000 - 14400000 + 1)) + 14400000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }
    
    bump()
    loop()
})

client.login(process.env.TOKEN)
