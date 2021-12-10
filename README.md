# cse-210-team-project-home-a-pet
We provide a product (Home-a-Pet) to you which will help you find the right pet. We do this by getting information from pet/adoption websites and showing you specific pets based on your criteria.

## For Development
### Installation
* Clone repo
* Create branch with `git checkout -b` and then the desired name of your branch
* Make sure you have Node.js and npm installed. See [this link for installing!].(https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Viewing
* Run `npm install` in the home directory (don't have to run this every time)
* Run `npm start` or `node app.js` in the home directory
* Go to [http://localhost:3000/](http://localhost:3000/) in your browser to view local version

### Making Changes
* Create or checkout a branch
* Make sure it's up to date with `git pull`
* If you make any changes to the code, push to your branch and make a PR to master branch (through Github)

### Resources/Links
* [React App Directory Structure](https://www.taniarascia.com/react-architecture-directory-structure/)
* [React-Bootstrap Intro](https://react-bootstrap.github.io/getting-started/introduction/)
* [React-Bootstrap Forms](https://react-bootstrap.github.io/components/forms/)
* [Petfinder API](https://www.petfinder.com/developers/v2/docs/#api-calls)
* [Petfinder JS SDK Docs](https://github.com/petfinder-com/petfinder-js-sdk/tree/master/docs)
* [Browserify-fs Docs](https://github.com/mafintosh/browserify-fs)

### Backend
* Go to web folder and run `python app.py` to start the server

#### APIs
* GET API /pets/pets - Fetches all the pets from database
* POST API /pets/pets - Adds a list of pets in the database
* GET API /pets/batch - Pulls the data from petfinder.com and stores the results in the database