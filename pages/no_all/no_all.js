import * as echarts from '../../ec-canvas/echarts';
//获取应用实例
const app = getApp()
//柱状图
var posList = [
  'left', 'right', 'top', 'bottom',
  'inside',
  'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
  'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
  rotate: {
      min: -90,
      max: 90
  },
  align: {
      options: {
          left: 'left',
          center: 'center',
          right: 'right'
      }
  },
  verticalAlign: {
      options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
      }
  },
  position: {
      options: echarts.util.reduce(posList, function (map, pos) {
          map[pos] = pos;
          return map;
      }, {})
  },
  distance: {
      min: 0,
      max: 100
  }
};

app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
      var labelOption = {
          normal: {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance
          }
      };
      myChart.setOption({
          series: [{
              label: labelOption
          }, {
              label: labelOption
          }, {
              label: labelOption
          }, {
              label: labelOption
          }]
      });
  }
};


var labelOption = {
  show: false,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
      name: {
          textBorderColor: '#fff'
      }
  }
};
function initChartOne(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {color: ['#003366', '#006699', '#4cabce', '#e5323e'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['黄陂区', '新洲区', '蔡甸区', '汉南区'],
      top: 22,
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
  toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
          mark: {show: false},
          dataView: {show: false, readOnly: false},
          magicType: {show: true, type: [ 'stack', 'tiled']},
          restore: {show: false},
          saveAsImage: {show: false}
      }
  },
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: '黄陂区',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          data: [32, 33, 30, 33, 30]
      },
      {
          name: '新洲区',
          type: 'bar',
          label: labelOption,
          data: [22, 18, 19, 23, 29]
      },
      {
          name: '蔡甸区',
          type: 'bar',
          label: labelOption,
          data: [15, 23, 20, 15, 19]
      },
      {
          name: '汉南区',
          type: 'bar',
          label: labelOption,
          data: [20, 30, 10, 19, 25]
      }
  ]
};

  chart.setOption(option);
  return chart;
}
//折线图
function initChartTwo(canvas, width, height, dpr) {
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
      data: ['车辆统计'],
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
      data: ['2020/8/29', '2020/8/30', '2020/8/29', '2020/8/30', '2020/8/31', '2020/9/1', '2020/9/2'],
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
      name: '车辆统计',
      type: 'line',
      smooth: true,
      data: [18, 15, 20, 18, 20, 10, 17]
    }, ]
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
    currentDate: [new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
     new Date().getDate()-4
   ).getTime(),
                 new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
     new Date().getDate()-1
   ).getTime()],
  },
  //时间的选择
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    const [start, end] = event.detail;
    this.setData({
      show: false,
      date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
    });
  },

  onLoad: function (options) {
   
  },
  
})
