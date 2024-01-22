import { Category } from "../category.entity"

describe('Category unit Tests', () => {
    test('constructor', () => {
        // Sempre dividir os testes em 3 partes: Arrange, Act e Assert
        // demilitar o input de dados, executar a ação e verificar o resultado
        const category = new Category({
            name: 'Category 1',
            description: 'Category 1 description',
            is_active: true,
            created_at: new Date()
        })
        expect(category).toBeInstanceOf(Category)
    })
})
