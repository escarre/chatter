'use strict';

angular.module('app')
  .controller('MessagesCtrl', function(convoName, messages) {
  	var messagesCtrl = this;

    messagesCtrl.convoName = convoName;
    messagesCtrl.messages = messages;

    // Send Messages
    messagesCtrl.send = function(message){
      Messages.send(message);
    };
  });
