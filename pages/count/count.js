import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{d}%'
  },
    color: ["#37A2DA", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        show: false,
        position: 'center'
    },
    emphasis: {
      label: {
          show: false,
          fontSize: '14',
          fontWeight: 'bold'
      }
  },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 70,
        name: 'PM超标率'
      }, {
        value: 30,
        name: 'PM未超标率'
      },]
    }]
  };

  chart.setOption(option);
  return chart;
}
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
      formatter: '{b}:{d}%'
  },
    color: ["#37A2DA", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        show: false,
        position: 'center'
    },
    emphasis: {
      label: {
          show: false,
          fontSize: '14',
          fontWeight: 'bold'
      }
  },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 70,
        name: 'PM超标率'
      }, {
        value: 30,
        name: 'PM未超标率'
      },]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: '',
      path: '/pages/login/login',
      success: function () { },
      fail: function () { }
    }
  },
  detail: function(){
      wx.redirectTo({
        url: '/pages/second_admin/second_admin',
      })
  },
  data: {
    ec: {
      onInit: initChart
    },
    ecTwo: {
      onInit: initChartTwo
    }
  },

  onReady() {
  }
});
