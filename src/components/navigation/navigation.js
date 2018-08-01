import './navigation.scss';
import './hamburger.scss';

export default class Nav {
    constructor() {
        console.log('nav');
        this.$el = document.querySelector('.js-nav');
        this.init();
    }
    init() {
        if (!this.$el) {
            return;
        }

        this.isOpened = false;
        this.$burger = this.$el.querySelector('.js-nav-burger');
        console.log(this.$burger);
        this.$burger.addEventListener('click', this.burgerClickHandler.bind(this));
        
    }

    burgerClickHandler() {
        console.log('click');
        this[this.isOpened ? 'close' : 'open']();
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
}