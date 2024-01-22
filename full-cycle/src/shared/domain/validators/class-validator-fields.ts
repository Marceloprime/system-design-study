import { validateSync } from "class-validator"

export abstract class ClassValidatorFields<PropsValidated> 
 implements ClassValidatorFields<PropsValidated>{
    errors: any | null = null
    validateDate: PropsValidated | null = null

    validate(data: any){
        const errors = validateSync(data)

        if(errors.length){
            this.errors = {}
            errors.forEach( (error) => {
                this.errors![error.property] = Object.values(error.constraints!)
            })
        } else {
            this.validate = data
        }

        return !errors.length
    }

}