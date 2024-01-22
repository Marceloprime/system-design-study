// o projeto é o código e o código é o projeto

import { ValidatorRules } from "../../shared/domain/validators/validators-rules";
import { Uuid } from "../../shared/domain/value-objects/uuid.vo";

export type CategoryConstructorProps = {
    category_id?: Uuid;
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;

}

export type CategoryCreateCommand = {
    name: string;
    description?: string;
    is_active?: boolean;
}

export class Category {
    category_id?: Uuid;
    name: string;
    description?: string;
    is_active?: boolean;
    created_at?: Date;

    constructor(props: CategoryConstructorProps) {
        this.category_id = props.category_id ?? new Uuid();
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? null;
        this.created_at = props?.created_at ?? new Date();
    }

    static create(props: CategoryCreateCommand): Category {
        const category = new Category(props);
        category.validate(category);
        return category;
    }

    update(props: Partial<CategoryConstructorProps>) : Category {
        return new Category({
            ...this,
            ...props
        });
    }

    changeName(name: string): void {
        ValidatorRules.values(name, 'name').required();
        this.name = name;
    }

    changeDescription(description: string): void{
        this.description = description;
    }

    activate(): void{
        this.is_active = true;
    }

    deactivate(): void{
        this.is_active = true;
    }

    validate(category: Category): void {
    }

    toJson() {
        return {
            category_id: this.category_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at
        }
    }
}

// objetos de valores são livres de efeitos colaterais
// são imutaveis

class BirthDate {
    constructor(private readonly value: string) {}

    getValue(): string {
        return this.value;
    }
}