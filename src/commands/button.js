const { ButtonKit } = require("commandkit")
const { SlashCommandBuilder, ButtonBuilder, EmbedBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js")


module.exports = {
     data: new SlashCommandBuilder()
    .setName("hiiii")
    .setDescription("hiiiiii"),
    
    run: ({ interaction, client, handler }) => {
     const button = new ButtonKit()
     .setLabel("hi")
     .setStyle(ButtonStyle.Danger)
     .setCustomId("eeee")


     const row = new ActionRowBuilder()
        .addComponents(button);
   interaction.reply({
    content: "hi",
    components:[row]    
   });

   button.onClick(
    (buttonInteraction) => {
        buttonInteraction.reply("hiii")
    }
   )
    }

    
}