
class TimeHelper {
    /**
     * 
     * @param {*} startT 开始时间 格式为 2018/11/11 20:00
     * @param {*} endT 结束时间 格式为 2018/11/11 20:00
     * @param {*} obj 传入一个对象 这个对象有 hour min second 
     */
    getRestTime(startT, endT, obj) {
        let restSeconds = (new Date(endT).getTime() - new Date(startT).getTime()) / 1000;
        let timer = setInterval(() => {
          obj.hour = restSeconds > 3600 ? (parseInt(restSeconds /  3600)) : 0;
          obj.min = (restSeconds - obj.hour * 60) > 60 ? parseInt((restSeconds - obj.hour * 3600) / 60) : 0;
          obj.second = restSeconds - obj.hour * 3600 - obj.min * 60;
          obj.hour = this.addZero(obj.hour);
          obj.min = this.addZero(obj.min);
          obj.second = this.addZero(obj.second);
          restSeconds--;
          if(obj.hour <= 0 && obj.min <= 0 && obj.second <= 0) {
            clearInterval(timer)
          }
        }, 1000)
      }
      addZero(tem) {
        return tem < 10? ('0' + tem) : tem;
      }
}
export default new TimeHelper();