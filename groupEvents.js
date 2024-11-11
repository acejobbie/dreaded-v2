const events = process.env.EVENTS || 'false';
const botname = process.env.BOTNAME || 'DREADED';

const Events = async (client, Fortu) => {
    const Myself = await client.decodeJid(client.user.id);

    try {
        let metadata = await client.groupMetadata(Fortu.id);
        let participants = Fortu.participants;
        let desc = metadata.desc || "No Description";

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://telegra.ph/file/c9f1fbd5b78d902762e5f.jpg";
            }

            if (Fortu.action == "add") {
                let userName = num;

                let Welcometext = ` Hello @${userName.split("@")[0]} \n\nWelcome to ${metadata.subject}.`;
                if (events === 'true') {
                    await client.sendMessage(Fortu.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                    });
                }
            } else if (Fortu.action == "remove") {
                let userName2 = num;

                let Lefttext = `
          See ya @${userName2.split("@")[0]} , mate `;
                if (events === 'true') {
                    await client.sendMessage(Fortu.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                    });
                }
            } else if (Fortu.action == "demote" && events === 'true') {
                await client.sendMessage(
                    Fortu.id,
                    {
                        text: `@${(Fortu.author).split("@")[0]}, has demoted @${(Fortu.participants[0]).split("@")[0]} from administrator.`,
                        mentions: [Fortu.author, Fortu.participants[0]]
                    }
                );
            } else if (Fortu.action == "promote" && events === 'true') {
                
                    await client.sendMessage(
                        Fortu.id,
                        {
                            text: `@${(Fortu.author).split("@")[0]} has promoted @${(Fortu.participants[0]).split("@")[0]} to administrator.`,
                            mentions: [Fortu.author, Fortu.participants[0]]
                        }
                    );
                }
            }
        
    } catch (err) {
        console.log(err);
    }
};


module.exports = Events;
