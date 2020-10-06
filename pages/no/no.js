import * as echarts from '../../ec-canvas/echarts';
//获取应用实例
const app = getApp()
//折线图
function initChartOne(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['超标次数'],
      top: 20,
      left: 'center',
      backgroundColor: '',
      z: 100
    },
    dataZoom: [
      {
          show: true,
          realtime: true,
          start: 0,
          end: 50
      },
      {
          type: 'inside',
          realtime: true,
          start: 0,
          end: 50
      }
  ],
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '超标次数',
      type: 'line',
      smooth: true,
      data: [3, 6, 5, 3, 7, 4, 3]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    toView: 'green',
    date: '',
    ecOne: {
      onInit: initChartOne
    },
    show: false,
    currentDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
     new Date().getDate()-1
   ).getTime(),
    identity: ''
  },
   //时间的选择
   onDisplay() {
    this.setData({ show: true,isShow: true });
  },
  onClose() {
    this.setData({ show: false,isShow: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
      isShow: false
    });
  },

  onLoad: function (options) {
    wx.getStorage({
      key: 'people',
      success: (res)=> {
        // console.log(res.data)
        if(res.data == 'user'){
          this.setData({
            identity: '客户'
          })
        }else if(res.data == 'admin'){
          this.setData({
            identity: '管理'
          })
        }
      }
    })
  },
  
})
