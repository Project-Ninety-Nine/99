# PROJECT 99
# 99

## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)


## Overview
### Description
Stores drink recipes and presents them in a user-friendly way. Users can search for drinks by name or can filter drinks by various category.

### App Evaluation
- **Category:** Food & Drink
- **Story:** Allows users to view different alcoholic beverages and drinks along with their ingredients.
- **Market:** Any individual over the age of twenty one could choose to use this app.
- **Habit:** This app can be used as much as a user wants to.
- **Scope:** We would start with sharing drink recipes and expand to something more social where people can 
             interact with each other and follow others on the site to get notified when they upload drink recipes. 
             We could also branch off into soemthing more busines oriented like an app that we can sell to bars so 
             their bartenders can more easily access recipes they need at a moments notice.

## Product Spec
### 1. User Stories (Required and Optional)

**Required Must-have Stories**

- User views all drinks on drink page

- Page of non-alcoholic drinks

- User can search for drinks by name

- User can visit the non-alcoholic, search, and drink page from home

- Accesibility


**Optional Nice-to-have Stories**

- User filters drinks by category

- User filters drinks by ingredient list

- User logs in to add their own drink recipes

- User profiles include basic info(name, intro(optional), and recipes they've contributed to the site)

### 2. Screens
⊛ Home Screen - Presents the website logo and interactive icons that lead to other pages

⊛ Drinks Screen - Displays all drinks and their names, categories, and whether or not it's alcoholic.

⊛ Search Screen - Allows user to search for drinks by name (OPTIONAL: and filter the drinks by various categories)

   - Drinks will appear as the user searches (If the user types an 'A' the drinks that contain 'A' will pop up)   
    
    
⊛ Non-alcoholic Screen - Displays all non-alcoholic drinks

⊛ Recipe Screen - Displays drink name, ingredients, measurements, instructions, and serving glass.



### 3. Navigation

**Flow Navigation** (Screen to Screen)

* Recipe screen -> Leads to popular drink screen, non-alcoholic screen, and home screen

* All Screens -> Lead to home screen (excluding the home screen itself)


### Networking
> List of network requests by screen:

- Login Screen
```  
(READ/GET) Get User Profile
```

- Popular Drinks Screen
```
(READ/GET) Get list of popular drinks
```

- Non-Alcoholic Screen
``` 
(READ/GET) Get list of non-alcoholic drinks
```

- Search Screen 
``` 
(Read/GET) Get a specific drink 
```

- Recipe Screen
```
(Read/GET) Get specific drink and it's category, ingredients, measurements, and recipe
```

[IF EXISTS:] 
```
Existing API Endpoints
An API for drinks
Base URL - https://www.thecocktaildb.com/api/json/v2/api_key

HTTP Verb	Endpoint	Description
GET	       /popular.php	                    get list of popular drinks
GET	       /filter.php?a=Non_Alcoholic	    get list non-alcoholic drinks
GET	       /search.php	                    search for a drink

```


Completed Task:

- Home Page
Allow user to login or browse as a guest and navigate to
popular drink, non-alcoholic, or search screen

- Login Page
Allows user to be able to be able to login into a personal account

- Popular Drinks Page
Show user list of popular drinks and allow them to navigate to
a Recipe screen.

- Non-Alcoholic Page
Show user list of non-alcoholic drinks and allow them to navigate to
a Recipe screen.

- Recipe Page
Show user the recipe of a specific drink.

- Search Page
Allow user to search for a specific drink.


Current Project Images:

- Home Page
![alt text](https://github.com/The-JAM/FirstRepo/blob/main/HomePage.png)

- Popular Drink Page
![alt text](https://github.com/The-JAM/FirstRepo/blob/main/SignInPage.png)

- Non-Alcoholic Page
![alt text](https://github.com/The-JAM/FirstRepo/blob/main/CartPage.png)

- Current Project Gif
![alt text]()
