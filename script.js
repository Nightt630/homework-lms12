const minecraftHero = {
  name: "Крафтерон",
  health: 100,
  armor: 50,
  tool: "алмазний меч",


  showInfo: function () {
    console.log(minecraftHero.name);
    console.log(minecraftHero.health);
    console.log(minecraftHero.armor);
    console.log(minecraftHero.tool);
  },
 
 userDamage: function (damage) {
    this.health -= damage;
    if (this.health < 0) {
      this.health = 0;
    }
  }
};


minecraftHero.showInfo();


minecraftHero.userDamage(60);



minecraftHero.showInfo();