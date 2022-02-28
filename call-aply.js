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

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const heroAalam = {
    id: 102,
    money: 6000,
    name: 'Hero Aalam',
}
/* kibria.treatDey.call(heroBalam, 500, 20)
kibria.treatDey.call(heroAalam, 500, 50) */

kibria.treatDey.apply(heroBalam, [500, 100, 50])
kibria.treatDey.apply(heroAalam, [500, 100, 150])