class User {
    constructor(name, email, phone, age, gender) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.gender = gender;
    }

    validate() {
        if (!this.name || typeof this.name !== 'string') {
            throw new Error('Invalid name');
        }
        if (!this.email || !this.validateEmail(this.email)) {
            throw new Error('Invalid email');
        }
        if (!this.phone || typeof this.phone !== 'string') {
            throw new Error('Invalid phone');
        }
        if (!this.age || isNaN(this.age) || this.age < 0) {
            throw new Error('Invalid age');
        }
        if (!this.gender || !['male', 'female', 'other'].includes(this.gender.toLowerCase())) {
            throw new Error('Invalid gender');
        }
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

module.exports = User;
