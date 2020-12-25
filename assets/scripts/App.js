import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Accordion from './modules/Accordion'
import Order from './modules/Order'
import ContactForm from './modules/ContactForm'
import InterActiveMenu from './modules/InterActiveMenu'

var homeUrl = 'index.html';
var faqUrl = 'faqs';
var orderUrl = 'order';
if ( window.location.href.indexOf(homeUrl) > 0){
    new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
    new RevealOnScroll(document.querySelectorAll(".testimonial"), 70);
    new InterActiveMenu();
}

if ( window.location.href.indexOf(faqUrl) > 0){
    new Accordion();
}

if ( window.location.href.indexOf(orderUrl) > 0){
    new Order();
}

if ( window.location.href.indexOf('contact') > 0){
    new ContactForm();
}

new StickyHeader();
new MobileMenu();




if (module.hot) {
    module.hot.accept()
}

