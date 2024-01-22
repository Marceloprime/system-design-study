import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(private readonly value: string) {
        super();
    }
}

describe("Value Object Unit Tests", () => {
    test('Should be equal', () => {
        const value1 = new StringValueObject('value');
        const value2 = new StringValueObject('value');

        expect(value1.equals(value2)).toBeTruthy();
    })

    test('Should not be equal', () => {
        const value1 = new StringValueObject('value');
        const value2 = new StringValueObject('value2');

        expect(value1.equals(value2)).toBeFalsy();
    })
})