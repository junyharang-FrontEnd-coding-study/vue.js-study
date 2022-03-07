import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);     // Vue 내에서 Router를 사용하겠다는 의미

const router = new VueRouter({
    mode: "history",
    // 실제 이용자가 URL Path로 들어왔을 때 어디로 갈지에 대해 routes 배열 안에 Object 형식으로 작성 해 준다.
    routes: [{
        path: "/",
        component: Home     // root Path로 들어오면 Component Home을 Loading 하겠다는 의미
    },
    {
        path: "/about",
        component: About    // /about Path로 들어오면 Component Aout을 Loading 하겠다는 의미
    }]          
});