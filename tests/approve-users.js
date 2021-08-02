const {firestore} = require("./firebase");

const {
    collectionCampaigns,
    collectionBallots,
    collectionGroups,
    collectionUsers
} = require("./values");

const users = firestore.collection(collectionUsers);

const reviewUserBase = async (callback = (data) => false) => {
    // Get documents
    try {
        const allUsers = await users.get();
        allUsers.forEach((user) => {
            user.ref.update({approved: callback(user.data())}).then((write) => {
                console.log(`User ${user.data().email} was ${user.data().approved ? "approved" : "denied"}`)
            })
        })
    } catch (e) {
        console.error(e)
    }

}

reviewUserBase(() => true).then(r => console.log("Done!"))