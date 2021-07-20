const Ajv = require("ajv")

class Schema {
    constructor(schema) {
        this.schema = schema;
        this.ajv = new Ajv();
        this.validate = () => this.ajv.compile(this.schema);
    }

    validator() {
        return this.validate;
    }
}