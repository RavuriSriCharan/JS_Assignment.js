let nftJavascript = [];
function mintNFT(name, country, player, intro, age) {
    const nft = {
        name: name,
        country: country,
        player: player,
        intro: intro,
        age: age
    };
    nftJavascript.push(nft);
}
function listNFTs() {
    nftJavascript.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`country: ${nft.country}`);
        console.log(`player: ${nft.player}`);
        console.log(`intro: ${nft.intro}`);
        console.log(`age: ${nft.age}`);
        console.log('------');
    });
}
function getTotalSupply() {
    console.log(`Total NFTs minted: ${nftJavascript.length}`);
}
mintNFT("Shreyas Iyer", "India", "Right handed batsman", "Captain of KKR", 36);
mintNFT("Phil Salt", "England", "Right handed batsman", "WicketKeeper of KKR", 32);
mintNFT("Mitchell Starc", "Australia", "Left arm fast bowler", "Expensive bowler in IPL 2024", 38);
listNFTs();
getTotalSupply();
