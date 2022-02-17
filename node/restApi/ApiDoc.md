~We will get Resataurant Data from Cloud DataBase by using below API's by making it live by herokuApp, These API's can help us to fetch data in our App for{
    Drop Down Menu
    Qucik Search
    Lisitng Page
    Meals and Menus
}

Page 1 API's

List of Restaurant >>> http://localhost:7500/restoList?state_id=5

List of City & Location >>> http://localhost:7500/locactionList

Quick Search >>> http://localhost:7500/meal


Page 2 API's

Restaurants by Quick Search 
>>> http://localhost:7500/restoList?meal_id=2

below API is optional to get Data wit both state and meal
>> http://localhost:7500/restoList?state_id=5&meal_id=4
