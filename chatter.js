angular.module('chatter', ['firebase']);

angular.module('chatter').controller( 'chat', [ 'Messages', '$scope', function( Messages, $scope ) {
    // Message Inbox
    $scope.messages = Messages.getMessages();
    // Receive Messages
    // Messages.receive(function(message){
    //     $scope.messages.push(message);
    // });
    // Send Messages
    $scope.send = function(message){
      Messages.send(message);
    };
    // $scope.send = function() {
    //     Messages.send({ data : $scope.textbox });
    // };
} ] );

angular.module('chatter').service('Messages', ['$firebase',
  function($firebase) {
     var Messages = this;
     var ref = new Firebase('https://ng-chatterbox.firebaseio.com/');

   	 var message_array = $firebase(ref.child('messages')).$asArray();

     Messages.getMessages = function(){
       return message_array;
     };

     Messages.send = function(message){
       return message_array.$add(message);
     };

     Messages.receive = function(messageId){
       return $firebase(ref.child('messages')).child(messageId).$asObject();
     };

     Messages.delete = function(message){
       return message_array.$remove(message);
     }

     Messages.user = '';

	}]);
