// console.log(this)
const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj Kibria',
    treatDey: function (expenses, tips) {
        this.money = this.money - expenses - tips;
        console.log('here', this);
        return this.money;
    }
}