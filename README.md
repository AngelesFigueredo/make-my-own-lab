# make-my-own-lab

This lab serves the purpuse of programming a CRUD with ReactJS. 
In this specific case the technologies used are JS, REACT, CSS, Vite and HTML. 

This project also includes an API created with json-server. This api contains and display the 7 Millennium problems of mathematics, more information on them [https://en.wikipedia.org/wiki/Millennium_Prize_Problems]. 

### Using the API
In order to use the API, open the terminal inside of the /fake-api folder and write 
1. We open the API folder 
```cd /fake-api```
2. Make sure json-server is installed
```
npm install -g json-server
```
3. This indicates that the API is based on the folder db.json
```
json-server --watch db.json
```

This will set our API in http://localhost:3000/
#### The react app must be opened in other port

