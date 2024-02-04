var APIKey = "RGAPI-0d549f47-503a-46e8-85df-06a5c70009a6";
var na_url = "https://na1.api.riotgames.com";

var summonerNames = [];
var summonerRanks = [];
var finalList = [];
var divisons = [];
var place1 = 0
var place2 = 0 
main();



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

    document.getElementById("summonRank_data_"+summoner_name).innerHTML = summoner_name+": "+summoner_tier+" "+summoner_rank+" Wins: "+summoner_wins+" Losses: "+summoner_losses;
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

async function main(){
    var Snowsayshi = data("Snowsayshi");
    var polo31 =  data("polo31")
    var urdle2 =  data("urdle2");
    var Lucyiel382 =  data("Lucyiel382");
    var Kreator =  data("Kreator");
    var ReinforcedToastr =  data("ReinforcedToastr");
    var Akubjay1 = data("Akubjay1");

    reorder();
}

function reorder(){
    
    setTimeout(() => { 
        var i = 0
        place1 = summonerNames[i]+" "+summonerRanks[i]
        while (i < 7) {
            if(i==0){
                place1 = summonerNames[i]+" "+summonerRanks[i]
                console.log(place1)
            } else if (divisons[i]<place1 && divisons[i]>place2) {
                place2 = summonerNames[i]+" "+summonerRanks[i]
            }
            i++        
        }
        console.log(place1)
    }, 2000);
    
    
    
}







