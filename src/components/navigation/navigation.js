import './navigation.scss';
import './hamburger.scss';

export default class Nav {
    constructor() {
        this.$el = document.querySelector('.js-nav');
        this.init();
    }
    init() {
        if (!this.$el) {
            return;
        }

        this.isOpened = false;
        this.$burger = this.$el.querySelector('.js-nav-burger');
        this.$linksWrap = this.$el.querySelector('.js-nav-links-wrap');
        this.navEvent = new Event('navProcess');
        this.$burger.addEventListener('click', this.burgerClickHandler.bind(this));
        this.$linksWrap.addEventListener('click', this.navClickHandler.bind(this));
        document.addEventListener('click', this.docClickHandler.bind(this));
        
    }

    burgerClickHandler() {
        this[this.isOpened ? 'close' : 'open']();
    }

    navClickHandler(e) {
        const $link = e.target.closest('.js-nav-link');
        if ($link) {
            document.dispatchEvent(this.navEvent);
        }

    }

    close() {
        this.isOpened = false;
        this.$burger.classList.remove('is-active');
        this.$el.classList.remove('is-opened');
    }

    open() {
        this.isOpened = true;
        this.$burger.classList.add('is-active');
        this.$el.classList.add('is-opened');
    }

    docClickHandler(e) {
        if (!e.target.closest('.js-nav')) {
            this.close();
        }
    }
}