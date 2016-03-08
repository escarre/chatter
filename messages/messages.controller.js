'use strict';

angular.module('app')
  .controller('MessagesCtrl', function(convoName, messages) {
    var messagesCtrl = this;

    messagesCtrl.convoName = convoName;
    messagesCtrl.messages = messages;
    messagesCtrl.message = {};
    messagesCtrl.user = '';
    messagesCtrl.hasUser = false;

    //todo: auth with firebase; in the meantime, set user's name here
    messagesCtrl.setUserName = function() {
      if (messagesCtrl.user) {
        messagesCtrl.hasUser = true;
      }
    };
    // Send Messages
    messagesCtrl.send = function(message) {
      debugger;
      if (messagesCtrl.message) {
        messagesCtrl.messages.$add({
          user: messagesCtrl.user,
          body: messagesCtrl.message.body,
          timestamp: Firebase.ServerValue.TIMESTAMP
        }).then(function() {
          messagesCtrl.message = {};
        })
      }
    };
    //factor this out to message service
    // Messages.send(message);
  });
