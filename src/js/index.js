// STYLES
import 'normalize.css';
import '@cmyee/pushy/scss/pushy.scss';
import '../scss/main.scss';
import 'aos/dist/aos.css';

//JS
import 'owl.carousel';
import './header';
import './portfolio';
import './reviews,';
import './faq';
import AOS from 'aos';

AOS.init({
    // offset: 400, // offset (in px) from the original trigger point
    duration: 400,
});
