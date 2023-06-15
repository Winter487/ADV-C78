var imagens = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fcriticalhits.com.br%2Fanime%2Fdemon-slayer-o-pai-do-tanjiro-era-um-cacador-de-demonios%2F&psig=AOvVaw3ubhUcIbBGCsIkjfSgLTMa&ust=1684608115465000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICjhbaEgv8CFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FKimetsuNoYaiba%2Fcomments%2Fukm3st%2Fhappy_mothers_day_kie_kamado%2F&psig=AOvVaw0De1JR2rpzNZNczvFfR7lG&ust=1684608195687000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOD5v9uEgv8CFQAAAAAdAAAAABAI", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fdemon-slayer%2F97067%2Fnews%2Fdemon-slayer-primeira-versao-de-tanjiro-era-bem-diferente-da-oficial&psig=AOvVaw39T-7g_i7Gubsc1VhnZ9Md&ust=1684608264801000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCL1_uEgv8CFQAAAAAdAAAAABAK", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnerdhits.com.br%2Fanime%2Fcosplay-de-nezuko-kamado-de-demon-slayer-esta-fora-deste-mundo%2F&psig=AOvVaw3IZTcvVW7zCbFrfAdf2twa&ust=1684608327858000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLClzZmFgv8CFQAAAAAdAAAAABAS", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F935200678909362070%2F&psig=AOvVaw1uOTHigkm6MZ5aaQxAO-5y&ust=1684608395910000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjXkLqFgv8CFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkimetsu-no-yaiba.fandom.com%2Fwiki%2FShigeru_Kamado&psig=AOvVaw2m0dqhY1Cfn8ykPjRcy0IW&ust=1684608435737000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLji_cyFgv8CFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.anime-planet.com%2Fcharacters%2Frokuta-kamado&psig=AOvVaw1ERf1aizF3fv2RMZXguiwU&ust=1684608475174000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKix5N-Fgv8CFQAAAAAdAAAAABAE"];

var namefamily = ["Albúm da família kamado","Tanjuro Kamado", "Kie Kamado", "Tanjiro", "Nezuko", "Hanako Kamado", "Shigeru Kamado", "Rokuta Kamado"  ];

var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 6
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = imagens[i];
     var updatedName  = namefamily[i];
     document.getElementById("Foto").src = updatedImage;
     document.getElementById("nome").innerHTML = updatedName; 
}