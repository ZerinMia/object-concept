const student = {
    id: 101,
    name: 'RJ Kibria',
    major: 'mathematics',
    isTich: false,
    money: 5000,
    subject: ['english', 'math101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'matematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDey: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.takeExam()
const remaining = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);
