# Credit-calculator

Данный проект выполнен на React в рамках тестового задания.

## Функционал
Для рассчёта данных по кредиту, необходимо ввести в форму все необходимые значения, после чего нажать кнопку "Рассчитать" или клавишу "Enter". На экране появятся результаты расчётов и сводная таблица.

**Форма**

Форма состоит из следующих полей: 
- сумма - сумма займа;
- срок - срок, на который будет браться займ;
- выпадающий список с полями "год" и "месяц" - для выбора единиц измерения срока займа;
- процентная ставка в год;
- тип платежа (аннуитетный или дифференцированный).

**Результаты расчёта**

В секции результатов расчёта отображаются следующие данные:
- сумма ежемесячного платежа;
- переплата по кредиту;
- полная сумма выплат.

**Таблица**

Таблица содержит данные по каждой выплате.


## Запуск приложения

Чтобы запустить данный проект необходимо:
1. клонировать данный репозиторий командой *git clone*;
2. в консоле вызвать команду *npm i*, дождаться окончания установки;
3. запустить приложение по адресу **localhost:3000** командой *npm start*.
