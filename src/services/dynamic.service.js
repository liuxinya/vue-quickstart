
import Vue from 'vue'

class UDynamicService {
    // 动态的打开一个组件
    open(option) {
        option = Object.assign({
            data: {},
            events: {}
        },option)
        let component = Vue.extend(option.component);
        let instance = new component();
        for(let i in option.data) {
            instance.$props[i] = option.data[i];
        }
        for(let i in option.events) {
            instance.$on(i, option.events[i]);
        }
        let temp = instance.$mount();
        if(option.selector) {
            option.selector.appendChild(temp.$el);
        } else {
            document.body.appendChild(temp.$el);
        }
        return instance;
    }
    // 手动的关闭一个组件
    destroy(instance) {
        instance.$el.remove();
    }
    // 清空所有的组件
    destroyAll() {

    }
}

export default new UDynamicService();