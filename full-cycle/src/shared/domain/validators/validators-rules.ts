export class ValidatorRules {
    private constructor(private value: any, private property: string) {} 
    
    static values(value: any, property: string){
        return new ValidatorRules(value, property)
    }

    required() {
        if(!this.value) {
            throw new Error(this.property)
        }
        return this
    }
}