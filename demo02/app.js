var app = new Vue({
  el: '#app',
  data: {
    selectedCollege: null,
    colleges: [{
      name: '计信院',
      majors: [{
        name: '软件工程'
      }, {
        name: '计算机科学与技术'
      }, {
        name: "信息安全"
      }, ]
    }, {
      name: '商学院',
      majors: [{
        name: '旅游管理'
      }, {
        name: '工商管理'
      }, {
        name: "行政管理"
      }, ]
    }, ]
  },
  computed: {
    toSelectedMajors: function() {
      var that = this;
      var selectedColleges = that.colleges.filter(function(item) {
        return item.name == that.selectedCollege;
      });
      if (selectedColleges.length >= 1) {
        return selectedColleges[0].majors;
      } else {
        return [];
      }
    }
  }
});
