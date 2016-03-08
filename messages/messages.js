'use strict';

angular.module('app').service('Messages', ['$firebaseArray', 'FirebaseUrl',
  function($firebaseArray, firebaseUrl) {
    var Messages = this;
    var ref = new Firebase(firebaseUrl + 'conversationMessages');

    Messages.forConversation = function(convoId) {
      return $firebaseArray(ref.child(convoId));
    };

    //  Messages.sendMessage = function(messages, message){
    //    messages.$add({
    //      user: messagesCtrl.message.user,
    //      body: messagesCtrl.message,
    //      timestamp: Firebase.ServerValue.TIMESTAMP
    //    })
    //  };

  }
]);
