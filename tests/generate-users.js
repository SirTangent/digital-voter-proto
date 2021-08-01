const {firestore} = require("./firebase");
const axios = require('axios').default;

const {
    collectionGroups,
    collectionUsers
} = require("./values");

const users = firestore.collection(collectionUsers);

const sleep = async (ms) => {
    return new Promise((resolve => {
        setTimeout(resolve, ms);
    }))
}

// Part 1: Obtain request from server
const getProfile = async (n) => {
    try {
        const res = await axios.get(`https://randomuser.me/api/?results=${n}&nat=us`);

        // Deconstruct Variables
        return res.data.results.map((result) => {return {
            gender: result.gender,
            name_first: result.name.first,
            name_last: result.name.last,
            email: result.email,
            state: result.location.state
        }})
    } catch (e) {
        console.error(e);
    }
}

// Part 2: Upload the profile as a document to the collection.
const uploadProfile = async (payload) => {
    try {
        return await users.add({...payload});
    } catch (e) {
        console.error(e);
    }

}

// Pipeline function
const generateProfiles = async (n, debug) => {
    try {

        const docs = await getProfile(n);

        for(const idx in docs) {
            const ref = await uploadProfile(docs[idx]);
            debug && console.log(`User for '${docs[idx].email}' created`)
            await sleep(500);
        }
    } catch (e) {
      console.error(e);
    }
}

module.exports = {
    getProfile,
    uploadProfile,
    generateProfiles
}
