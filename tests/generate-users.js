const {firestore, auth} = require("./firebase");
const axios = require('axios').default;

const {
    collectionGroups,
    collectionUsers
} = require("./values");

const DELAY = 200;

const users = firestore.collection(collectionUsers);

// Source: https://stackoverflow.com/questions/1497481/javascript-password-generator by Gumbo
const generatePassword = (length) => {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

const sleep = async (ms) => {
    return new Promise((resolve => {
        setTimeout(resolve, ms);
    }))
}

// Part 1: Obtain request from server
const getProfile = async (n, nat) => {
    try {
        return (await axios.get(`https://randomuser.me/api/?results=${n}${nat ? "&nat=" + nat : ""}`)).data.results;
    } catch (e) {
        console.error(e);
    }
}

// Part 2: Upload the profile as a document to the collection.
const uploadProfile = async (payload) => {
    try {
        const pwd = generatePassword(8);
        const auth_user = await auth.createUser({
            email: payload.email,
            password: pwd,
            displayName: `${payload.name_first} ${payload.name_last}`,
        })
        return await users.add({uid: auth_user.uid, ...payload});
    } catch (e) {
        console.error(e);
    }

}

// Pipeline function
const generateProfiles = async (n, debug, nat, filter = (docs) => {
    return docs.filter((result) => true)
}) => {
    try {
        let docs = await getProfile(n, nat);
        docs = filter(docs.map( (result) => { return {
            gender: result.gender,
            name_first: result.name.first,
            name_last: result.name.last,
            email: result.email,
            city: result.location.city,
            state: result.location.state,
            country: result.location.country
        }}))

        for(const idx in docs) {
            const ref = await uploadProfile(docs[idx]);
            debug && console.log(`User for '${docs[idx].email}' created`)
            await sleep(DELAY);
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
