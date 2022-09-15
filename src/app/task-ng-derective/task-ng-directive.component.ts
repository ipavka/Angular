import { Component } from '@angular/core';

interface Fruit {
  id: string;
  name: string;
  price: number;
}

// 1. Отрисовать массив фруктов (вывести name & prise)
// 2. Нечётные элементы массива отобразить ЗЕЛЕНЫМ цветом
// 3. Четные элементы массива отобразить КРАСНЫМ цветом
// 4. Отобразить только продукты стоимостью больше 7
// 5. Продуктам стоимостью больше 15 добавить любой стиль,
// который их выделит в списке (например жирный или размер шрифта сделать больше)

@Component({
  selector: 'ins-task-ng-directive',
  templateUrl: './task-ng-directive.component.html',
  styleUrls: ['./task-ng-directive.component.scss'],
})
export class TaskNgDirectiveComponent {
  fruits: Fruit[] = [
    { id: '1', name: 'apple', price: 10 },
    { id: '2', name: 'orange', price: 20 },
    { id: '3', name: 'watermelon', price: 30 },
    { id: '4', name: 'banana', price: 5 },
    { id: '5', name: 'pears', price: 12 },
    { id: '6', name: 'raspberries', price: 18 },
    { id: '7', name: 'avocado', price: 14 },
    { id: '8', name: 'mangoes', price: 3 },
    { id: '9', name: 'kiwifruit', price: 7 },
  ];
}
