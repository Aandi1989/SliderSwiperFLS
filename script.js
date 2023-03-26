// Инициализируем Swiper
new Swiper('.image-slider',{
    // Стрелки
    // в настройках можем указывать любые классы любых обьектов и уже эти объекты при клике
    // будут переключать наши слайды. Сейчас используются стандартные классы чтобы подтянулись
    // стандартные стили по умолчанию, но эти стили можем поменять.
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination:{
        el:'.swiper-pagination',
        /* 
        // Буллеты
        clickable: true, // возможность пролистывать по клику на сам булетт
        dynamicBullets:true, // кастомные буллеты меняющее размер взависимости от расстояния до активного элемента
        renderBullet: function(index, className){ // выводим номер слайда или группы слайдов
            return '<span class=" ' + className + ' ">' + (index + 1) + '</span>' ;
        },
        */

       /* 
       // Фракции  
       type: 'fraction',
       // Кастомный вывод фракций (добавляем к цифрам несколько слов)
       renderFraction: function(currentClass, totalClass){
        return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + 
        '<span class="' + totalClass + '"></span>';
       },
        */

       // Прогрессбар
       type:'progressbar'
    },
});