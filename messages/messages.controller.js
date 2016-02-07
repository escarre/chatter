'use strict';

angular.module('app')
  .controller('MessagesCtrl', function(convoName, messages) {
  	var messagesCtrl = this;

    messagesCtrl.convoName = convoName;
    messagesCtrl.messages = messages;
    messagesCtrl.message = {};

    // Send Messages
    messagesCtrl.send = function(message){
      if(messagesCtrl.message) {
        messagesCtrl.messages.$add({
          user: messagesCtrl.message.user,
          body: messagesCtrl.message.body,
          timestamp: Firebase.ServerValue.TIMESTAMP
        }).then(function(){
          messagesCtrl.message = {};
        })
      }
      //factor this out to message service
      // Messages.send(message);
    };
  });
