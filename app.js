

const inquirer = require('inquirer');


inquirer
.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
        
    }
])
.then(answers => console.log(answers));








// //const needed if you are linking a page?
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name.github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('portfolio complete! check out index.html to see the output');

// })

