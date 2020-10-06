//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    userName:'',
    password: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pickerHidden: true,
    chosen: '',
    src:'http://up.wustcloud.com/admin/yuanchengxiaochengxu/imgs/logo3.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },
  getdata: function(e){
    console.log(e.detail.value);
    this.setData({
      userName: e.detail.value
    })
  },
  getvalue(e){
    console.log(e.detail.value)
    this.setData({
      password: e.detail.value
    })
  },

  submit() {
    if( this.data.userName == 'admin' && this.data.password == 'wust123456'){
      wx.navigateTo({
        url:'../count/count',
      })
      wx.setStorage({
        key:"people",
        data:this.data.userName
      })
      // console.log('111')
    }else if(this.data.userName == 'user' && this.data.password == 'wust123456'){
      wx.navigateTo({
        url:'../second/second',
      })
      wx.setStorage({
        key:"people",
        data:this.data.userName
      })
    } else {
      // console.log('222')
      wx.showToast({
        title: '用户名或密码错误！',
        duration: 2000,
        icon: 'none'
      })
    }
  }
 
})
