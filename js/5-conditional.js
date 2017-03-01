/**
 * v-if
 */
var vm = new Vue({
    el: '#app',
    data: {
        type: 'ok',

        /**
         * 1. <template>中的v-if条件组
         * 最终渲染结果不会包含<template>
         */
        temp: 'ok',

        /**
         * 2. v-else-if
         * 顾名思义就是else if
         */
        multi: 'A',

        /**
         * 3. 使用key控制元素的可重用
         */
        loginType: 'email',
        loginType2: 'email',

        /**
         * 4. v-show 只是简单的切换css的display属性
         * 不支持<template>
         */
        show: 'yes'
    }
});

function changeLoginType() {
    if (vm.loginType === 'email') {
        vm.loginType = 'username';
    } else {
        vm.loginType = 'email';
    }
}
function changeLoginType2() {
        if (vm.loginType2 === 'email') {
        vm.loginType2 = 'username';
    } else {
        vm.loginType2 = 'email';
    }
}