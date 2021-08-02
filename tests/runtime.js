const {generateProfiles} = require("./generate-users");

const generateUserBase = async (n, ratio) => {
    await generateProfiles(n, true, "us");
    await generateProfiles(Math.floor(n/ratio), true);
}

generateUserBase(32,2).then(r => console.log("Operation Completed!"));