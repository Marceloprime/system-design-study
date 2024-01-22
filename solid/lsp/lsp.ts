abstract class Movie {
    play() {}

    increaseVolume() {}
}

class Terminator extends Movie {

}

// A classe ModernTimes não pode ser substituida pela classe Movie
class ModernTimes extends Movie {
    increaseVolume(): void {
        // Metodo não suportado
    }
}