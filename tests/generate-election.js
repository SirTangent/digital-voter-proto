const {firestore} = require("./firebase");

const {
    collectionCampaigns,
    collectionBallots,
    collectionGroups,
    collectionUsers
} = require("./values");

const collection = firestore.collection(collectionCampaigns);

// Add new campaign
collection.add({
    title: "2024 Presidential Election",
    whitelist: ["a", "b"],
    dateCreated: Date.now()
})
    .then((ref) => {
        console.log(`Document ID '${ref.id}' created!`)
    })