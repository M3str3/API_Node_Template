const express = require('express');
const app = express()
const morgan = require('morgan')

/* Setting variable port at 3000, u can use app.get('port'), to get the value in any moment */
app.set('port', process.env.PORT || 3000)

/*  CONFIG  */

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
/* To response with json -> res.json() */
app.use(express.json());

/* Route files */
app.use(require('./routes/routes'));


/* API START LISTENING */
app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));