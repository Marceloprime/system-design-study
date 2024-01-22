import { InvalidUuidError, Uuid } from "../uuid.vo"

describe('Test uuid', () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')
    test('Should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError())

        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test("Should create a valid uuid", () => {
        const uuid = new Uuid()
        expect(uuid).toBeDefined()
    })


    test("Should accept a valid uuid", () => {
        const uuid = new Uuid('f39013ea-c0ba-4d66-9aba-61aa08a52cd9')
        expect(uuid).toBeDefined()
    })
})