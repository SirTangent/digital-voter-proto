const {firestore, auth} = require("./firebase");

const {
    collectionCampaigns,
    collectionBallots,
    collectionGroups,
    collectionUsers
} = require("./values");

const users = firestore.collection(collectionUsers);

const USER_APPROVAL_RATE = 0.90;

const reviewUserBase = async (callback = (data) => false) => {
    // Get documents
    try {
        const allUsers = await users.get();

        let promises = [];
        let auth_promises = [];

        await allUsers.forEach((user) => {
            const approved = callback(user.data());
            promises.push(user.ref.update({approved: approved}).then(() => {
                const user_data = user.data();
                auth_promises.push(auth.setCustomUserClaims(user_data.uid, {
                    approved: approved
                }).then(() => {
                    console.log(`User ${user_data.email} was ${approved ? "approved" : "denied"}`);
                }))

            }));
        })
        await Promise.all(promises);
        await Promise.all(auth_promises);
    } catch (e) {
        console.error(e)
    }

}

const randomReview = (rate = USER_APPROVAL_RATE) => {
    reviewUserBase((user) => {
        return [user.country == "United States",
                Math.random() <= rate]
                 .every((n) => n);
    });
}

module.exports = {
    reviewUserBase,
    randomReview
}