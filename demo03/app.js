new Vue({
  el: '#app',
  data: {
    firstName: 'Steve',
    secondName: 'Jobs'
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.secondName;
      },
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.secondName = names[names.length - 1]
      }
    }
  }
});
