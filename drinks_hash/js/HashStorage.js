'use strict';

	function HashStorage() {
        var self = this;
    };
    HashStorage.prototype.storage = {};
    HashStorage.prototype.addValue = function(key,value) {
        this.storage[key] = value;
    }
    HashStorage.prototype.getValue = function(key) {
        if(key in this.storage) {
            return this.storage[key];
        }
        else {
            return undefined; 
        }
    }
    HashStorage.prototype.deleteValue = function(key) {
        if(key in this.storage) {
            delete this.storage[key];
            return true;
        }
        else {
            return false;
        }
    }
    HashStorage.prototype.getKeys = function() {
        return Object.keys(this.storage);
    }


    var drinkStorage = new HashStorage;
    drinkStorage.addValue('Чай', {'Алкогольный':'нет','Рецепт приготовления':'взять листья зеленого чая(1/3 ч.л.), лимон(1 дольку), натертый имбирь(1 гр.), поместить все это в чашку 350-400 мл, залить кипятком на 95%, накрыть блюдцем, дать завариться 5-10 мин. Готово!'});
    drinkStorage.addValue('Морс',{'Алкогольный':'нет','Рецепт приготовления':'взять клюкву(300гр), отжать сок, в жмых засыпать сахар(по вкусу), залить водой, довести до кипения и варить несколько минут, остудить и.. Готово!'});
    console.log(drinkStorage.getValue('Чай'));

// function question() {
//     var drinkName = prompt('Введите название напитка');
//     var alcoholic = confirm('Напиток алкогольный?(Нажмите ОK если Да, иначе нажмите Отмена)');
//     if(alcoholic == true) {
//         var alcoTest = "да";
//     }
//     else {
//         var alcoTest = "нет";
//     }
//     var recipte = prompt('Рецепт напитка:');
//     var drinkStorage = new HashStorage;
//     drinkStorage.addValue(drinkName,recipte);
//     console.log(drinkStorage.getValue(drinkName));
// }