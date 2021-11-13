#Get started
``````````````````````````````````````````````````````
1.clone this repo and install dependencies with yarn or npm.
``````````````````````````````````````````````````````
2. go to https://dispex.org/api/vtest/docs/swagger/index.html click authorize and get 
your key 
`````````````````````````````````````````````````
3. create .env file in project folder and copy text from .env.example with replace REACT_APP_AUTH_KEY  on your key 
`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
4. start the app
````````````````````````````````````
# Warning  
The application may not work stably because backend not all time worked correctly

#Additional Info
it is testing work to company 
Task:
Поиск адреса и список жильцов должны быть на одном экране
Добавление/изменение/удаление данных - в модальных диалогах

стэк: 
javaScript react/hooks/redux/redux-thunk
можно использовать: axios, antd или material ui
TypeScript не использовать

API BASE URL : https://dispex.org/api/vtest

https://dispex.org/api/vtest/docs/swagger/index.html

Функционал:

1) Выбор адреса
   Улица -> Дом -> Квартира
   (возможность поиска)

API:
GET /Request/streets
GET /Request/houses/{id}
GET /Request/house_flats/{id}

можно использовать только улицы где cityId = 1.
для тестирования использовать дома Федюнинского 30 (все корпуса)
+ привязываться к квартирам, а не к подъездам и домам

2.a) Добавление и Привязка жильца к выбранной квартире
(Номер телефона , email, ФИО),  
Обязательный параметр - Номер телефона
2.b) Изменение данных жильца
2.c) Отвязка жильца от квартиры

API:
POST /HousingStock/client
PUT    /HousingStock/bind_client
DELETE /HousingStock/bind_client/{id}

3) Отображение всех жильцов в квартире

API:
GET /HousingStock/clients
