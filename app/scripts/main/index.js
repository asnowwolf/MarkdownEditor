'use strict';

angular.module('app').controller('MainIndexCtrl', function ($http, pageSettings, foldSettings) {
  var vm = this;
  vm.markdownOptions = {
    mode: "markdown",
    lineNumbers: true,
    lineWrapping: true,
    extraKeys: {"Ctrl-Q": function (cm) {
      cm.foldCode(cm.getCursor());
    }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  };
  vm.cssOptions = {
    mode: "css",
    lineNumbers: true,
    lineWrapping: true
  };
  vm.activePage = 1;
  vm.text = '';
  $http.get('styles/preview.css').success(function(text) {
    vm.styles = text;
  });
  vm.html = function () {
    return marked(vm.text);
  };
  vm.load = function () {
    vm.text = sessionStorage.getItem('content');
  };
  vm.save = function () {
    sessionStorage.setItem('content', vm.text);
  };
  vm.load();
  vm.fold = foldSettings;
  vm.foldTo = function(level) {

  };
  vm.preview = null;
  vm.print = function() {
    vm.preview.print();
  };
  vm.loadMarkdown = function(text) {
    vm.text = text;
  };
  vm.saveMarkdown = function() {
    var blob = new Blob([vm.text], {type: "application/json;charset=utf-8"});
    saveAs(blob, "doc.md");
  };
  vm.loadCss = function(text) {
    vm.styles = text;
  };
  vm.saveCss = function() {
    var blob = new Blob([vm.styles], {type: "text/css;charset=utf-8"});
    saveAs(blob, "theme.css");
  };
  vm.saveAsHtml = function() {
    var blob = new Blob([vm.html()], {type: "application/json;charset=utf-8"});
    saveAs(blob, "doc.html");
  };
  vm.setZoom = function(factor) {
    vm.preview.document.body.style.zoom = factor;
  };
  vm.page = pageSettings;
});
