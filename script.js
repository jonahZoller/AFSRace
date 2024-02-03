var APIKey = "RGAPI-039891bf-7630-4187-99f7-020019544632";
var na_url = "https://na1.api.riotgames.com";


data("Snowsayshi");
data("polo31");
data("urdle2");
data("Lucyiel382");
data("Kreator");
data("ReinforcedToastr");
data("Akubjay1")

// function Search_summoner(){
//     summoner_name = document.getElementById("summoner_name").value;   
//     console.log(summoner_name);
//     data();
// }

async function data(summoner_name){
    var summoner_name = summoner_name;
    var summonerNameURL = "/lol/summoner/v4/summoners/by-name/" +summoner_name;
    var fullSummonerNameURL = na_url+summonerNameURL+"?api_key="+APIKey;
    console.log(fullSummonerNameURL);
    const dataSummoner = await fetch(fullSummonerNameURL);
    const dataSummonerFull = await dataSummoner.json();
    console.log(dataSummonerFull);

    var summonerLevel = dataSummonerFull.summonerLevel;
    console.log(summonerLevel)

    rank(summoner_name,dataSummonerFull);

}

async function rank(summoner_name,dataSummonerFull){
    var summoner_id = dataSummonerFull.id;
    var summonerNameURL2 = "https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/";
    var ranked_summoner_url = summonerNameURL2 +summoner_id+ "?api_key="+APIKey;
    const rankedSummoner1 = await fetch(ranked_summoner_url);
    const rankedSummoner_Full = await rankedSummoner1.json();
    const rankedSummoner_data = rankedSummoner_Full[0];
    console.log(rankedSummoner_data);
    var summoner_wins = rankedSummoner_data.wins;
    var summoner_losses = rankedSummoner_data.losses;
    var summoner_tier = rankedSummoner_data.tier;
    var summoner_rank = rankedSummoner_data.rank;

    console.log(summoner_tier+" "+summoner_rank)
    document.getElementById("summonRank_data_"+summoner_name).innerHTML = summoner_name+": "+summoner_tier+" "+summoner_rank
}




