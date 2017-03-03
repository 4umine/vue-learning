var vm = new Vue({
    el: '#app',
    data: {
        message: '',
        checked: false,
        checkedNames: [],
        ppap: '',
        select: '',
        multiSelect: [],

        selected: '',
        options: [
            {text: 'one', value: 'A'},
            {text: 'two', value: 'B'},
            {text: 'three', value: 'C'}
        ]
    }
});