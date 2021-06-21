import {isString, isBoundedNumber, isSex} from '../type-validators';



const DemoSchema = {
    collection_name: "collection_demo",
    schema: {
        name: isString,
        age: isBoundedNumber(0, 99),
        sex: isSex
    }
}

export default DemoSchema;