# structure

I will explain the main contents which I made.

1. Screens folder
- HomeScreen.js : The root component of this app
2. Components folder
- RedditList: The component of whole reddit post list.
- ListDetail: The component of each post item.
3. Store folder : It does the main function of redux.
You can see the normal structure for Redux such as actions, reducers, sagas, and store.

Action: Register and Create the actions
Saga: API call for getting list.
Reducer: Handle the actions and Manage the states.

# How to run
1. You should install the expo client app from APP STORE.
2. You should run 'npm start' or 'expo start' to run the app/
3. Using expo client
 If it runs, there are several connection options like Tunnel, LAN, Local
 -You can use the url of each method to run the app.
 -You can also use the QR code to autorun the app.
 -You can publish the project to work only with URL
# How to deploy
 There is a option for PRODUCTION MODE. Using this option, you can bulid the production.

# How to work with expo client

1. On the projects option

- Using expo-cli, you can run the app. Just type the url of app which you can see the connection option.
- You can see the current started project in 'Recently In Development' list.

2. On the profile option

If you have published the project, you could see the lists.
