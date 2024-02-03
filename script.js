var APIKey = "RGAPI-039891bf-7630-4187-99f7-020019544632";
var na_url = "https://na1.api.riotgames.com";

var summonerNames = [];
var summonerRanks = [];
var finalList = [];
var divisons = [];
var place1 = 0;
var place2 = 0;
var place3 = 0;
var place4 = 0;
var place5 = 0;
var place6 = 0;
var place7 = 0;

reorder();



// function Search_summoner(){
//     summoner_name = document.getElementById("summoner_name").value;   
//     console.log(summoner_name);
//     data();
// }

async function data(summoner_name){
    var summoner_name = summoner_name;
    var summonerNameURL = "/lol/summoner/v4/summoners/by-name/" +summoner_name;
    var fullSummonerNameURL = na_url+summonerNameURL+"?api_key="+APIKey;
    // console.log(fullSummonerNameURL);
    const dataSummoner = await fetch(fullSummonerNameURL);
    const dataSummonerFull = await dataSummoner.json();
    // console.log(dataSummonerFull);

    var summonerLevel = dataSummonerFull.summonerLevel;
    // console.log(summonerLevel)

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
    var summoner_newName = rankedSummoner_data.summonerName; 
    var summoner_wins = rankedSummoner_data.wins;
    var summoner_losses = rankedSummoner_data.losses;
    var summoner_tier = rankedSummoner_data.tier;
    var summoner_rank = rankedSummoner_data.rank;

    summonerNames.push(summoner_newName);
    summonerRanks.push(summoner_tier+" "+summoner_rank);
    // console.log(summonerNames);
    // console.log(summonerRanks);
    // console.log(summoner_tier+" "+summoner_rank);

    document.getElementById("summonRank_data_"+summoner_name).innerHTML = summoner_name+": "+summoner_tier+" "+summoner_rank;
    // ir = 0, br = 1, si = 2, go = 3, pl = 4, em = 5, ma = 6, gr = 7, ch = 8
    var summonerDiv = summoner_tier.substring(0,2)
    if (summonerDiv == "IR"){
        summonerDiv = 0;
    } else if (summonerDiv == "BR"){
        summonerDiv = 1;
    } else if (summonerDiv == "SI"){
        summonerDiv = 2;
    } else if (summonerDiv == "GO"){
        summonerDiv = 3;
    } else if (summonerDiv == "PL"){
        summonerDiv = 4;
    } else if (summonerDiv == "EM"){
        summonerDiv = 5;
    } else if (summonerDiv == "MA"){
        summonerDiv = 6;
    } else if (summonerDiv == "GR"){
        summonerDiv = 7;
    } else if (summonerDiv == "CH"){
        summonerDiv = 8;
    }
    divisons.push(summonerDiv)

    // console.log(divisons)
    
}

async function reorder(){
    var Snowsayshi = await data("Snowsayshi");
    var polo31 = await data("polo31")
    var urdle2 = await data("urdle2");
    var Lucyiel382 = await data("Lucyiel382");
    var Kreator = await data("Kreator");
    var ReinforcedToastr = await data("ReinforcedToastr");
    var Akubjay1 = await data("Akubjay1");
    console.log("done")

    for (let i = 0; i < divisons.length; i++) {
        if(divisons[i]>place1){
            place1 = summonerNames[i]+" "+summonerRanks[i]
        } else if (divisons[i]<place1 && divisons[i]>place2) {
            place2 = summonerNames[i]+" "+summonerRanks[i]
        }
        
    }
    console.log(place1)
    console.log(place2)
    console.log(divisons)
    
}








