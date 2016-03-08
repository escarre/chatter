'use strict';

angular.module('app')
  .factory('Conversations', ['$firebaseArray', 'FirebaseUrl',
    function($firebaseArray, firebaseUrl) {
      var ref = new Firebase(firebaseUrl + 'conversations');
      var conversations = $firebaseArray(ref);

      return conversations;

    }
  ]);
