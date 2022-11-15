class Professional {
    name;
    age;
    weight;
    height;
    isRetired;
    nationality;
    oscarsNumber;
    profession;
    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
}

module.exports = Professional;