const Ajv = require("ajv")
const ajv = new Ajv()
const {legalName, stateID, yesNo, telephone} = require("../expressions")

// Include additional formats
require("ajv-formats")(ajv)

export const races = ["White", "Asian", "Hispanic", "Black", "Pacific Islander", "Other"]
export const sexes = ["Male", "Female"]

export const RegistrationSchema = {
    type: "object",
    properties: {
        name: {type: "string", pattern: legalName},
        dob: {type: "string", format: "date"},
        stateID: {type: "string", pattern: stateID},
        acknowledge: {type: "boolean", const: true},
        legalName: {type: "string", pattern: legalName},
        race: {type: "string", enum: races},
        sex: {type: "string", enum: sexes},
        citizen: {type: "string", enum: yesNo},
        ofLegalAge: {type: "string", enum: yesNo},
        firstName: {type: "string", pattern: legalName},
        middleName: {type: "string", pattern: legalName},
        lastName: {type: "string", pattern: legalName},
        suffix: {type: "string", pattern: legalName},
        telephone: {type: "string", pattern: telephone},
        email: {type: "string", format: "email"},
        ssn: {type: "string", pattern: "[0-9]{4}"},

        // TODO: Add specific validators
        residentialAddress: {type: "string"},
        residentialCity: {type: "string"},
        residentialState: {type: "string"},
        residentialZip: {type: "string", pattern: "[0-9\\-]*"},
        birthAddress: {type: "string"},
        birthCity: {type: "string"},
        birthState: {type: "string"},
        birthZip: {type: "string"},

        todaysDate: {type: "string", format: "date"},
    },

    // TODO: What is required?
    required: ["firstName", "lastName"],
    additionalProperties: false
}

export default ajv.compile(RegistrationSchema);