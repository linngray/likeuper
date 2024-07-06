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

    async function otherBump() {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
    }

    function loop() {
        // Prevent Detection
        var randomNum = Math.round(Math.random() * (19800000 - 14400000 + 1)) + 14400000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }

    function otherLoop() {
        // Prevent Detection
        var randomNum = Math.round(Math.random() * (10800000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            otherBump()
            otherLoop()
        }, randomNum)
    }

    bump()
    loop()
    otherBump()
    otherLoop()
})

client.login(process.env.TOKEN)
