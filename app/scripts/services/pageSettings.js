"use strict";
angular.module('app').service('pageSettings', function PageSettings() {
  this.papers = [
    {
      id: 1,
      name: 'A4',
      width: '210mm',
      height: '297mm'
    },
    {
      id: 2,
      name: 'B5',
      width: '176mm',
      height: '250mm'
    },
    {
      id: 3,
      name: 'A3',
      width: '297mm',
      height: '420mm'
    }
  ];
  this.paper = _.findWhere(this.papers, {id: 1});
  this.zooms = [
    {
      id: 1,
      name: '1/4',
      value: 0.25
    },
    {
      id: 2,
      name: '1/2',
      value: 0.5
    },
    {
      id: 3,
      name: '原大小',
      value: 1
    },
    {
      id: 4,
      name: '2倍',
      value: 2
    },
    {
      id: 5,
      name: '4倍',
      value: 4
    }
  ];
  this.zoom = _.findWhere(this.zooms, {value: 1});
  this.landscapes = [
    {
      id: 1,
      name: '纵向'
    },
    {
      id: 2,
      name: '横向'
    }
  ];
  this.landscape = _.findWhere(this.landscapes, {id: 1});
  this.width = function () {
    if (this.landscape.id === 1) {
      if (this.zoom.id === -1)
        return '100%';
      else
        return this.paper.width;
    } else {
      if (this.zoom.id === -1)
        return 'auto';
      else
        return this.paper.height;
    }
  };
  this.height = function () {
    if (this.landscape.id === 1) {
      if (this.zoom.id === -1)
        return 'auto';
      else
        return this.paper.height;
    } else {
      if (this.zoom.id === -1)
        return '100%';
      else
        return this.paper.width;
    }
  };
});