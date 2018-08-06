import './quote.scss';

export default class Quote {
    constructor() {
        this.$el = document.querySelector('.js-quote');
        this.endPoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        this.init();
    }
    init() {
        if (!this.$el) {
            return;
        }
        this.$main = this.$el.querySelector('.js-quote-main');
        this.$author = this.$el.querySelector('.js-quote-author');
        document.addEventListener('navProcess', this.getQuote.bind(this))

        this.getQuote();
    }

    getQuote() {
        this.$el.classList.remove('is-visible');
        const request = fetch(this.endPoint).then((response)=> {
            console.log(response);
            response.json().then((data)=> {

                console.log(data);
                this.$main.innerHTML = data[0].content;
                this.$author.innerHTML = data[0].title;
                this.$el.classList.add('is-visible');
            })
        })
    }
}