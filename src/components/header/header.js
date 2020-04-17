import './header.scss';

import $ from 'jquery';

$(document).ready(() => {

  const $navigation = $('.js-header__navigation');
  const $burger = $('.js-header__burger');
  const $closeButton = $('.js-header__close-button');
  const $fade = $('.fade');
  const $navigationVisibilityClass = 'header__navigation_visible';
  const $fadeVisibilityClass = 'fade_visible';
 

  const openMenu = () => {
    $navigation.addClass($navigationVisibilityClass);
    $fade.addClass($fadeVisibilityClass);
  }

  const closeMenu = () => {
    $navigation.removeClass($navigationVisibilityClass);
    $fade.removeClass($fadeVisibilityClass);
  }

  $burger.on('click', openMenu);
  $closeButton.on('click', closeMenu);
});