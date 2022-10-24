# Template for API REST in Node.js
-----
If you are new on Node.js i give you an easy template for start your API REST.

### First steps
////////////////////////////////////////////////////////////////////////////////////////////////
- Execute ``npm i`` on the template folder to install dependencies
- If you are testing you can execute ``npm run dev`` to launch the api with nodemon, that make auto refresh the api everytime you change a file.
- If want execute the api without nodemon ``node .`` on template folder

Go ``http://localhost:3000/test`` to try it

### Estructure
////////////////////////////////////////////////////////////////////////////////////////////////
- Template
	- src
		- index.js
		- routes
			- *Routes to the different paths on the API*
		- controllers
			- *Functions on the routes*
	- node_modules / *The libreries*
	- package.json / *node app info*