app.factory('User', function(localStorageService) {
  var user = {
    name: localStorageService.get('username')
  };

  var save = function(){
    localStorageService.set('username', user.name);
  };

  return {
    getName: function() {
      return user.name;
    },
    setName: function(name){
      user.name = name;
      save();
    }
  };
});
