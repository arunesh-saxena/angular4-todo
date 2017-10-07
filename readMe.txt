------------jquery---------------
First: Install jQuery, the actual library
npm install jquery --save
Then: Install jQuery TypeScript autocomplete

npm install @types/jquery --save-dev
Finally: Go to the ./angular-cli.json file at the root of your Angular CLI project folder, and find the scripts: [] property, add this inside it:

"../node_modules/jquery/dist/jquery.min.js"



---------------bootstrap

At first, you have to install tether, jquery and bootstrap with these commands


npm install -save tether

npm install -save jquery

npm install -save bootstrap@4.0.0-alpha.4
 
After add these lines in your angular-cli.json file

 
 "styles": [
   
 "styles.scss",
  
  "../node_modules/bootstrap/scss/bootstrap-flex.scss"
 
 ],
 
 "scripts": [
  
  "../node_modules/jquery/dist/jquery.js",
 
   "../node_modules/tether/dist/js/tether.js",
    
"../node_modules/bootstrap/dist/js/bootstrap.js"

  ]
  

https://v4-alpha.getbootstrap.com/
-----------------------------------