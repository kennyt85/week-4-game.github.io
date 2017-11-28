var oAquaman = {
    id: "Aquaman",
    health: 100,
    attack: 100,
    counter: 99,
    image: "../assets/images/aquaman.jpg",
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