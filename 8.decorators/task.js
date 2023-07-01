function cachingDecoratorNew(func) {
  
  let cache =[];

  function wrapper(...args) {
    const hash = args.join(","); //формируем хэш(уникальный признак) способом строчного перечисления параметров чрз запятую


    let idx = cache.findIndex((item)=> item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу

    if (idx !== -1 ) { // если элемент найден
        console.log("Из кэша: " + cache[idx].value); // вывод в консоль нового вычисленного значения func
        return "Из кэша: " + cache[idx].value;
    } else {
         let value = func(...args); // вычисление значения свойства .value, которое станет элементом массива cashe[]. 
         cache.push({hash, value}) ; // добавляем элемент-объект с двумя свойствами в конец массива cashe[]
    let cashLengh = cache.length; // вычисляем длину массива cashe[]
      if (cashLengh > 5) { 
          cache.shift(); // если элементов в кэше больше пяти - удалить самый старый (первый) 
      }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;
    }
     
  }
  return wrapper;
  
}

 // #################################### TASK 2 ############################################

function debounceDecoratorNew(func, ms) {
 
  let timeout;
  let flag = false, 
  savedArgs,
  savedThis;

  return function (...args) {
    
    savedArgs = args; // обновляем аргументы при каждом вызове функции func
    savedThis = this; // обновляем контекст при каждом вызове функции func
    if (flag) { // если флаг поднят, выходим без запуска func
      return;
    }

    func.apply(this, savedArgs); // запускаем переданную функцию
    flag = true; // взводим флаг
    clearTimeout(timeout); //удаляем старый таймер

    timeout = setTimeout(() => { // ставим таймер,  
    flag = false; // чтобы очистить флаг
    func.apply(savedThis, savedArgs); // и выполнить func с последними сохранёнными аргументами и контекстом
    }, ms);
  }
 
}

// #################################### TASK 3 ############################################

function debounceDecorator2(func, ms) {
  
  let timeout;
  let flag = false, 
  savedArgs,
  savedThis,
  count; // счётчик вызова func
  

  return function (...args) {
    
    if (count === undefined) count = 0; //при первом вызове func ставим счётчик на ноль
    savedArgs = args; // обновляем аргументы при каждом вызове функции func
    savedThis = this; // обновляем контекст при каждом вызове функции func
    if (flag) { // если флаг поднят, выходим без запуска func
      return;
    }

    func.apply(this, savedArgs); // запускаем переданную функцию
    flag = true; // взводим флаг
    count += 1 // увеличиваем счётчик вызова func на 1
    clearTimeout(timeout); //удаляем старый таймер

    timeout = setTimeout(() => { // ставим таймер,  
    flag = false; // чтобы очистить флаг
    func.apply(savedThis, savedArgs); // выполнить func с последними сохранёнными аргументами и контекстом,
    count += 1; // и увеличить счётчик вызова func на 1
    }, ms);
  }
