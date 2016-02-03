angular.module('app').service('Messages', ['$firebaseArray', 'FirebaseUrl',
  function($firebaseArray, firebaseUrl) {
     var Messages = this;
     var ref = new Firebase(firebaseUrl + 'conversationMessages');

     Messages.forConversation = function(convoId){
       return $firebaseArray(ref.child(convoId));
     }

	}]);
