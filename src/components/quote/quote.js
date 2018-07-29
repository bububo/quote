export default class Quote {
    constructor() {
        this.el = document.querySelector('.js-main');
        this.endPoint = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
        this.init();
    }
    init() {
        if (!this.el) {
            return;
        }
        const request = fetch(this.endPoint).then((response)=> {
            console.log(response);
            response.json().then((data)=> {

                console.log(data);
                this.el.innerHTML = data[0].content;
            })
        })
    }
}