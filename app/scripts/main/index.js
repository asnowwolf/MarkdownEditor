'use strict';

angular.module('app').controller('MainIndexCtrl', function () {
  var vm = this;
  vm.options = {mode: "markdown",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function (cm) {
      cm.foldCode(cm.getCursor());
    }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  };
  vm.text = '';
  vm.html = function () {
    return '<style>table{border: 1px solid gray;}</style>' + marked(vm.text);
  };
  vm.load = function () {
    vm.text = localStorage.getItem('content');
  };
  vm.save = function () {
    localStorage.setItem('content', vm.text);
  };
  vm.load();
  vm.foldLevels = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'},
    {id: 6, name: '6'},
    {id: 7, name: '7'},
    {id: 8, name: '8'},
    {id: 9, name: '9'}
  ];
  vm.foldTo = function(level) {

  };
  vm.currentFoldLevel = {};
});
