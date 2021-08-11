const admin = require("firebase-admin");

const admin_key = require("./digital-voting-portal-firebase-adminsdk-dp1iy-a9399dd818.secret.json");

admin.initializeApp({
    credential: admin.credential.cert(admin_key)
})

module.exports = {
    firestore: admin.firestore(),
    auth: admin.auth()
}