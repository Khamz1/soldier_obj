const soldier = {
    name: 'Jane',
    health: 10,
    weapon: {
        weaponName: 'm14',
        quntity: 30
    },
    supplies: 3,
    shoot(){
      this.weapon.quantity-- 
    console.log(`bah bah`)
    if(this.weapon.quntity==0){console.log('Обойма пуста.Перезарядитесь')}

    },
    reload(){
        this.weapon.quantity=30
        this.supplies--
        console.log('перезарядка')
        if(this.supplies==0){console.log("не осталось припасов")}
    
    },
    hurt(){this.health--
    if(this.health==0){console.log("ты проиграл")}}


}

