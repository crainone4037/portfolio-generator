

const inquirer = require('inquirer');


const promptUser = () =>{

return inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'what is your name?(required)',
        validate: nameInput => {
            if(nameInput){
                return true; 
            
            }else{ 
                console.log('Please enter your name!');
                return false;
            }
        }

        
    },
    {
        type: 'input',
        name: 'github',
        message: ' Enter your Github Username',

        validate: nameInput => {
            if(nameInput){
                return true; 
            
            }else{ 
                console.log('Please enter your Github usuername!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'would you like to enter some information about yourself for an "about" section?',
        default: true
    },
    
    {
        type: 'input', 
        name: 'about',
        message: 'provide some information about yourself',

      when: ({confirmAbout}) => {
        if(confirmAbout){
            return true;
        }else {
            return false; 
        }
      }
    }
]);

};



const promptProject = portfolioData =>{

    if (!portfolioData.projects){

    portfolioData.projects = [];
    }




    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name o your project?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project(Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you build this project with?(check all that apply)',
            choices: ['javascript','HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node' ]
        },
        {
            type: 'input',
            name: ' link',
            message: ' enter the Github link to your project(Required)'
        },
        {
            type:'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false

    
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: ' would you like to enter another project?',
            default:false

        }

    ]);
};


promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers))
  .then(projectData => {
      portfolioData.projects.push(projectData);
      if(projectData.confirmAddProject) {
          return promptProject(portfolioData);
      }else {
          return portfolioData;
      }

    });











// //const needed if you are linking a page?
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name.github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('portfolio complete! check out index.html to see the output');

// })

