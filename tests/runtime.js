const {generateProfiles} = require("./generate-users");

generateProfiles(500, true).then(r => console.log("Operation Completed!"));