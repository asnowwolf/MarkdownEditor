"use strict";

angular.module('app').service('foldSettings', function FoldSettings() {
  this.levels = [
    {
      id: 1,
      name: '1',
      hint: '折叠到一级标题'
    },
    {
      id: 2,
      name: '2',
      hint: '折叠到一级标题'
    },
    {
      id: 3,
      name: '3',
      hint: '折叠到一级标题'
    },
    {
      id: 4,
      name: '4',
      hint: '折叠到一级标题'
    },
    {
      id: 5,
      name: '5',
      hint: '折叠到一级标题'
    },
    {
      id: 6,
      name: '6',
      hint: '折叠到一级标题'
    },
    {
      id: 7,
      name: '7',
      hint: '折叠到一级标题'
    },
    {
      id: 8,
      name: '8',
      hint: '折叠到一级标题'
    },
    {
      id: 9,
      name: '9',
      hint: '折叠到一级标题'
    }
  ];
  this.level = _.findWhere(this.levels, {id: 9});
  this.isActive = function(level) {
    return this.level.id === level.id;
  };
});