class SliderService {
    constructor(obj) {
        this.dom = obj.dom;  // 要动的dom
        this.bodyH = obj.bodyH; // body的高
        this.length = obj.length;   // 用于对滑动极点的判断
        this.time = obj.time ? obj.time : '0.5';   // 过渡时间
        this.gap = obj.gap? obj.gap: '0';  // 滑动到极点位置  还能滑动的距离
        this.startY = 0;
        this.moveY = 0;
        this.endY = 0;
        this.sliderDis = 0;  // 每次滑动的距离
        this.currY = 0;  // slider的当前位置
        this.dis = this.bodyH / 5;   // 滑动至下一张的界限 默认屏幕的五分之一
        this.currIndex = 0;
        this.init();
    }
    touchstart(e) {
        // e.preventDefault();
        this.startY = this.getClientY(e);
        // 获取当前位置  并把currY 更新
        this.currY = this.getTranslateY();
        this.removeTransition();
    }
    touchmove(e) {
        // e.preventDefault();
        this.sliderDis = this.getClientY(e) - this.startY;
        if(this.edgeJudgment()) {
            this.setTranslateY(this.sliderDis, false)
        }
    }
    touchend(e) {
        // e.preventDefault();
        this.addTransition();
        if(Math.abs(this.sliderDis) >= this.dis) {

            if(this.sliderDis >= 0) {
                // 下滑
                this.currIndex = this.currIndex <= 0? 0 : this.currIndex - 1;
                let dis = -this.currIndex * this.bodyH;
                this.setTranslateY(dis, true)
            }else {
                // 上滑
                this.currIndex = this.currIndex >= this.length - 1? this.length - 1 : this.currIndex + 1;
                let dis = -this.currIndex * this.bodyH;
                this.setTranslateY(dis, true)
            }

        }else {
            this.setTranslateY(0, false);
        }
    }
    transitionend() {
        this.currY = this.getTranslateY();
    }
    init() {
        this.addEvent();
        this.dom.style.transform = "translateY(0px)";
    }
    addEvent() {
        this.dom.addEventListener('touchstart', this.touchstart.bind(this));
        this.dom.addEventListener('touchmove', this.touchmove.bind(this));
        this.dom.addEventListener('touchend', this.touchend.bind(this));
        this.dom.addEventListener('transitionend', this.transitionend.bind(this));
    }
    removeEvent() {
        this.dom.removeEventListener('touchstart', this.touchstart.bind(this));
        this.dom.removeEventListener('touchmove', this.touchmove.bind(this));
        this.dom.removeEventListener('touchend', this.touchend.bind(this));
        this.dom.removeEventListener('transitionend', this.transitionend.bind(this));
    }
    edgeJudgment() {
        if(this.currIndex == 0 && this.sliderDis >= this.gap) {
            // console.log(1)
            this.setTranslateY(this.gap, false);
            return false;
        }
        if(this.currIndex == this.length - 1 && this.sliderDis <= -this.gap) {
            // console.log(2)
            this.setTranslateY(-this.gap, false);
            return false;
        }
        // console.log(3)
        return true;
    }
    removeTransition() {
        // 其实手在屏幕的时候  是不需要过渡的
        this.dom.style.transition = 'none';
    }
    addTransition() {
        // 手离开屏幕的时候， 又需要过渡
        this.dom.style.transition = 'all ' + this.time + 's';
    }
    getClientY(e) {
        return e.changedTouches[0].clientY;
    }
    setTranslateY(dis, flag) {
        let res = flag? dis: (this.currY + dis);
        this.dom.style.transform = "translateY(" + res + 'px' + ")";
    }
    getTranslateY() {
        // return parseInt(this.dom.style.transform.split('(')[1]);
        return parseInt(this.dom.style.transform.match(/[-0-9.0-9]/g).join(''));
    }
    resize() {
        // 当resize的时候 只有当前页的位置要变 所以手动触发一次设置translateY
        let dis = -this.currIndex * this.bodyH;
        this.setTranslateY(dis, true)
    }
}
export default SliderService;