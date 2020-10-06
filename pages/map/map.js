const app = getApp()
 
Page({
  data: {
    markers: [], // 标记点集合
    polyline: [], // 坐标点集合
    satellite: false, // 是否开启卫星图
    i: 0, // 用于循环
    identity:''
  },
  onReady: function() {
    this.mapCtx = wx.createMapContext('map'); // 创建 map 上下文 MapContext 对象
  },
  onLoad: function() {
    //获取权限
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

    let that = this;
 
    // 获取当前坐标
    wx.getLocation({
      type: 'gcj02',
      isHighAccuracy: true,
      success: (res) => {
        // 坐标集合
        console.log(res);
        let points = [{
          longitude: res.longitude,
          latitude: res.latitude
        }, {
          longitude: res.longitude + 0.00001,
          latitude: res.latitude + 0.00001
        }, {
          longitude: res.longitude - 0.0001,
          latitude: res.latitude + 0.0002
        }, {
          longitude: res.longitude - 0.0001,
          latitude: res.latitude + 0.0001
        }, {
          longitude: res.longitude,
          latitude: res.latitude
        }
      ];
        // 标记点集合
        let markers = points;
        markers.map((value, index) => {
          markers[index].id = index + 1;
        });
 
        this.setData({
          polyline: [{
            points: points,
            color: "#3982ff",
            width: 6
          }],
          markers: markers,
          latitude: res.latitude,
          longitude: res.longitude
        })
        this.translateMarker(markers);
      }
    })
  },
  // 平移marker，带动画
  translateMarker: function(markers) {
    let that = this;
    let markerId = markers[that.data.i].id;
    let destination = {
      longitude: markers[that.data.i + 1].longitude,
      latitude: markers[that.data.i + 1].latitude
    };
    let getDistance = that.getDistance(markers[that.data.i].latitude, markers[that.data.i].longitude, markers[that.data.i + 1].latitude, markers[that.data.i + 1].longitude);
    let duration = getDistance * 2; // 根据距离计算平移的速度，看起来保持匀速
    this.mapCtx.translateMarker({
      markerId: markerId,
      destination: destination,
      autoRotate: true,
      rotate: 30,
      duration: duration,
      success(res) {
        that.setData({
          i: that.data.i + 1
        });
        // 小于长度减1才执行
        if (that.data.i < markers.length - 1) {
          that.translateMarker(markers);
        }
      },
      fail(err) {
        console.log('fail', err)
      }
    })
  },
  // 计算两坐标点之间的距离
  getDistance: function(lat1, lng1, lat2, lng2) {
    let rad1 = lat1 * Math.PI / 180.0;
    let rad2 = lat2 * Math.PI / 180.0;
    let a = rad1 - rad2;
    let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    let r = 6378137;
    return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0)
  },
  
})