var app = angular.module('chatroom');

app.controller('mainCtrl', function(parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on this.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers this as messages (this.messages)

  var app = this;

  app.getParseData = function(){
    parseService.getData().then(function(response){
      app.messages = response.data.results;
    });
  }

app.getParseData();






  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.
  

  app.postData = function(text){
    parseService.postData(text);
    app.message='';
  }

  app.sort = function(){
    if(app.sort){
      app.sort = false;
    } else {
      app.sort = true;
    }
    return app.sort;
  }

  

  //uncomment this code when your getParseData function is finished
  //this goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
     app.getParseData();
   }, 1500)

   
   app.directions = [
  {
    name: 'Ascending',
    value: false
  },
  {
    name: 'Descending',
    value: true
  }
  ];
})

