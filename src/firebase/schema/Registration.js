const Ajv = require("ajv")
const ajv = new Ajv()
const {legalName, stateID, telephone} = require("../expressions")

// Include additional formats
require("ajv-formats")(ajv)

export const races = ["White", "Asian", "Hispanic", "Black", "Pacific Islander", "Other"]
export const sexes = ["Male", "Female"]

export const RegistrationSchema = {
    type: "object",
    properties: {
        citizen: {type: "boolean"},
        ofLegalAge: {type: "boolean"},

        name: {
            type: "object", properties: {
                nameFirst: {type: "string", pattern: legalName},
                nameMiddle: {type: "string"},
                nameLast: {type: "string", pattern: legalName},
                suffix: {type: "string"}
            }
        },
        nameFormer: {
            type: "object", properties: {
                nameFirst: {type: "string"},
                nameMiddle: {type: "string"},
                nameLast: {type: "string"},
                suffix: {type: "string"}
            }
        },

        dob: {type: "string", format: "date"},
        stateID: {type: "string", pattern: stateID},
        telephone: {type: "string", pattern: telephone},
        email: {type: "string", format: "email"},
        ssn: {type: "string", pattern: "[0-9]{4}"},
        hasStateLicense: {type: "boolean"},

        race: {type: "string", enum: races},
        sex: {type: "string", enum: sexes},

        // TODO: Add specific validators
        residentialAddress: {type: "object", properties: {
                street: {type: "string"},
                city: {type: "string"},
                state: {type: "string"},
                zip: {type: "string", pattern: "[0-9\\-]*"},
            }
        },
        birthAddress: {type: "object", properties: {
                street: {type: "string"},
                city: {type: "string"},
                state: {type: "string"},
                zip: {type: "string", pattern: "[0-9\\-]*"},
            }
        },

        acknowledge: {type: "boolean", const: true},
        todaysDate: {type: "string", format: "date"},
    },

    // TODO: What is required?
    additionalProperties: false
}

export default ajv.compile(RegistrationSchema);