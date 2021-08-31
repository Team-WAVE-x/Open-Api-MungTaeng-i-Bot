const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    execute(message) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**Help**")
        .addField(':help', '명령어 목록 및 도움말을 보여줍니다')
        .addField(':고양이', '고양이 사진을 랜덤하게 보여줍니다')
        .addField(':강아지', '강아지 사진을 랜덤하게 보여줍니다')
        .setTimestamp()
        .setFooter('Mungtengyee');
    
    message.channel.send({ embeds: [exampleEmbed] });
    }
};