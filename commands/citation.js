const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('citation')
        .setDescription('Gives a formatted citation.')
        .addSubcommand(subcommand => subcommand
            .setName('book')
            .setDescription('gives a formatted citation for a book')
            .addStringOption(option => 
                option.setName('surname')
                    .setDescription('Authors Surname')
                    .setRequired(true))
            .addStringOption(option => 
                option.setName('firstname')
                    .setDescription('Authors Firstname')
                    .setRequired(true))
            .addStringOption(option => 
                option.setName('year')
                    .setDescription('Year Published')
                    .setRequired(true))
            .addStringOption(option => 
                option.setName('title')
                    .setDescription('Title of the book')
                    .setRequired(true))
        
        ),
        // .addSubcommand(subcommand => subcommand
        //     .setName('view')
        //     .setDescription('View your timetable')
        // )
        // .addSubcommand(subcommand => subcommand
        //     .setName('delete')
        //     .setDescription('Deletes your timetable data')    
        // ),
    async execute(interaction) {

        switch(interaction.options.getSubcommand()) {
            case "book":
                let surname = interaction.options.getString('surname');
                let firstname = interaction.options.getString('firstname');
                let year = interaction.options.getString('year');
                let title = interaction.options.getString('title');

                let citation = surname + ", " + firstname.charAt(0) + ". (" + year + ") " + title

                await interaction.reply(citation);
        }

        
    },
};