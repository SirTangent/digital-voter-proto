import {firestore} from "./firebase";
import registrationSchema from "./schema/Registration";

export const postRegistrationForm = (formData, callback) => {
    // Validate schema before request
    registrationSchema(formData)
    console.log(registrationSchema.errors);
    callback(formData);
}