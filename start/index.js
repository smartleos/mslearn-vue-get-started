const App = Vue.createApp({
    data() {
        return {
            productName: '某一本書',
            productDescription: '這是一本書的介紹',
            imageSource: './media/sample.png',
            classObject: {
                centered: true,
                active: true
            },
            styleObject: {
                'backgorund-color': 'red',
                'font-size': '20px',
                'color': 'green',
                'text-align': 'center'
            },
            productImage: 'assets/cruise.jpg',
            productImageDescription: 'An astronaut floats outside the window while you sit in comfort',
            productImageStyle: {
                'border-radius': '15px'
            }
        }
    }
})