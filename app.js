'use strict';

angular
.module('app', [
  'firebase',
  'ui.router'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html'
    })
   .state('conversations', {
      url: '/conversations',
      controller: 'ConversationsCtrl as conversationsCtrl',
      templateUrl: 'conversations/index.html',
      resolve: {
        conversations: function (Conversations) {
          return Conversations.$loaded();
        }
      }
    })
    .state('conversations.messages', {
      url: '/{conversationId}/messages',
      controller: 'MessagesCtrl as messagesCtrl',
      templateUrl: 'messages/messages.html',
      resolve: {
        convoName: function($stateParams, conversations){
          return '#'+conversations.$getRecord($stateParams.conversationId).name;
        },
        messages: function($stateParams, Messages){
          return Messages.forConversation($stateParams.conversationId).$loaded();
        }
      }
    })
    .state('conversations.create', {
      url: '/create',
      controller: 'ConversationsCtrl as conversationsCtrl',
      templateUrl: 'conversations/create.html'
    })
  })
.constant('FirebaseUrl', 'https://ng-chatterbox.firebaseio.com/');
