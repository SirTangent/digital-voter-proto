const {firestore} = require("./firebase");

const {
    collectionCampaigns,
    collectionBallots,
    collectionGroups,
    collectionUsers
} = require("./values");

const collection = firestore.collection(collectionCampaigns);

const generateCampaign = async () => {
    // Add new campaign
    const ref = await collection.add({
        title: "Election Alpha",
        whitelist: {country: "United States"},
        dateCreated: Date.now(),
        candidates: ["A", "B", "C"]
    });

    console.log(`Document ID '${ref.id}' created!`);
}

module.exports = {
    generateCampaign
}
