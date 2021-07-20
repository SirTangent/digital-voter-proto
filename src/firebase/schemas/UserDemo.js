import Schema from "./Schema";

const schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        age: {type: "integer", minimum: 18, maximum: 119},
        state: {type: "string", nullable: true}
    },
    required: ["name", "age"],
    additionalProperties: false
}

export default new Schema(schema).validator();