'use strict';

angular.module('app')
  .controller('ConversationsCtrl', function(conversations) {
    var conversationsCtrl = this;

    conversationsCtrl.convos = conversations;

    conversationsCtrl.addConvo = function() {
      if (conversationsCtrl.newConvo) {
        conversationsCtrl.convos.$add(conversationsCtrl.newConvo).then(function(ref) {
          $state.go('conversations.messages', {
            conversationId: ref.key()
          });
        });
      }
    };

    conversationsCtrl.deleteConvo = function(convo) {
      conversationsCtrl.convos.$remove(convo);
    };

  });
