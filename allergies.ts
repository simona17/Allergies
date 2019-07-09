export default class Allergies {
    private al: { [name: string]: number } = {
        eggs: 1,
        peanuts: 2,
        shellfish: 4,
        strawberries: 8,
        tomatoes: 16,
        chocolate: 32,
        pollen: 64,
        cats: 128
    };

    private score: number;

    constructor(score: number) {
        this.score = score;
    }

    allergicTo(allergy: string): boolean {
        let isAllergy: boolean = false;
        let currentScore = this.al[allergy];
        isAllergy = (this.score & currentScore) === currentScore;
        return isAllergy;
    }

    list(): string[] {
        let allergyList: string[] = [];
        Object.keys(this.al).forEach(allergenName => {
            if (this.allergicTo(allergenName)) {
                allergyList.push(allergenName);
            }            
        });
        return allergyList;
    }
}
let alrg : Allergies= new Allergies(34);

console.log(alrg.allergicTo("chocolate"));