import './navigation.scss';
import './hamburger.scss';

export default class Nav {
    constructor() {
        this.el = document.querySelector('.js-nav');
        this.init();
    }
    init() {
        if (!this.el) {
            return;
        }
        
    }
}