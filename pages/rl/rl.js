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
      data: ['油箱液位'],
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
      name: '油箱液位',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, ]
  };

  chart.setOption(option);
  return chart;
}
//饼状图
function initChartTwo(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['当前油箱液位', '剩余空间', ]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'inside'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 70, name: '当前油箱液位'},
                {value: 30, name: '剩余空间'},
            ]
        }
    ]
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
    ecTwo: {
      onInit: initChartTwo
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
