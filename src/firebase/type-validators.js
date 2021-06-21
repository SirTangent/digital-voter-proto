import validator from 'validator';

// Returns true if all elements in array return truthy values.
const and = (A) => (x) => {
    for (let i in A) {
        if (!A[i](x)) {return false;}
    }
    return true;
}

// Enums
export const sex = {
    MALE: 0,
    FEMALE: 1
}
export const isSex = (x) => Object.values(sex).includes(x);

// Primitives
export const isString = (x) => typeof x == 'string';
export const isBoolean = (x) => typeof x == 'boolean';
export const isNumber = (x) => typeof x == 'number';
export const isTimestamp = (x) => validator.isDate(x);

// Complex types
export const isBoundedNumber = (low, high, excludeBounds) => and([
    isNumber,
    x => excludeBounds ? (x > low && x < high) : (x >= low && x <= high)
]);