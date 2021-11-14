

 let mass = +prompt('Веедите свой вес(кг):');
 let height = +prompt('Введите ваш рост(м):');
 let index = Math.round ((mass /(height ** 2)) * 10) / 10 ;
 console.log(`Индекс массы тела: ${index}`);

 if( index <= 16 ){
     alert('!!!! Дефицит массы тела');
 }else if(index >= 16 && index <= 18.5){
     alert('Недостаточная масса тела');
 }else if(index >= 18.5 && index <= 25){
     alert('Норма');
 }else if(index >= 25 && index <= 30){
     alert('Избыточная масса тела');
 }else if(index >= 30 && index <= 35){
     alert('Ожирение');
 }else if(index >= 35 && index <= 40){
     alert('!!! Ожирение 2 степени');
 } else if(index >= 40 ){
     alert('!!! Ожирение 3 степени');
}     


