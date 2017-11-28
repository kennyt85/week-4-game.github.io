var oWonderWoman = {
    id: "WonderWoman",
    health: 100,
    attack: 6,
    counter: 100,
    image: "../assets/images/wonder-woman.jpg",
    setHealth: function (damage) {
        this.health -= damage;
    },
    setAttack: function () {
        this.attack += 6;
    },
    reset: function () {
        this.health = 100;
        this.attack = 6;
    }
}