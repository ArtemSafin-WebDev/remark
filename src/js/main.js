import polyfills from './polyfills';
import './lazyload';
import detectTouch from './detectTouch';
import setScrollbarWidth from './setScrollbarWidth';
import validation from './validation';
import customSelects from './customSelects';
import masks from './masks';
import fileUpload from './fileUpload';
import anchorLinks from './anchorLinks';
import mediaPlayer from './mediaPlayer';
import datepicker from './datepicker';
import modals from './modals';
import accordions from './accordions';
import cases from './cases';
import partners from './partners';
import pressCenter from './pressCenter';
import reviews from './reviews';
import introSlider from './introSlider';
import fancybox from './fancybox';
import menu from './menu';
import interviewsSlider from './interviewsSlider';
import filtersRange from './filtersRange';
import productCards from './productCards';
import productTagsShowMore from './productTagsShowMore';


document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    setScrollbarWidth();
    validation();
    customSelects();
    masks();
    fileUpload();
    anchorLinks();
    accordions();
    mediaPlayer();
    modals();
    datepicker();
    cases();
    partners();
    pressCenter();
    reviews();
    introSlider();
    fancybox();
    menu();
    interviewsSlider();
    filtersRange();
    productCards();
    productTagsShowMore();
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    setTimeout(() => document.body.classList.add('animatable'), 300);
})
