const {generateProfiles} = require("./generate-users");
const {reviewUserBase, randomReview} = require("./approve-users");
const {generateCampaign} = require("./generate-election");

const generate = async (n, p) => {
    await generateCampaign();
    await generateProfiles(n, true, "us");
    await generateProfiles(Math.floor(n*p), true);
    await randomReview(0.8);
}


generate(250,0.5).then(r => console.log("Operation Completed!"));
