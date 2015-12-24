import $ from 'jquery';
import angular from 'angular';
import ui from 'jquery-ui';


import './app-core/index';
import './app-main/index';


angular
  .module('app', ['app.core', 'app.layout'])
;
