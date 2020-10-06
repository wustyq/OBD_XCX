// pages/second2/second2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "鄂A12345",
  },
  cannot: function(){
    wx.showToast({
      title: '该模块不能点击哦！！！',
      duration: 1000,
      icon: 'none'
    })
  },
  klw_all: function(){
    wx.redirectTo({
      url: '/pages/klw_all/klw_all',
    })
  },
  no_all: function(){
    wx.redirectTo({
      url: '/pages/no_all/no_all',
    })
  },
  carspeed: function(){
    wx.redirectTo({
      url: '/pages/carspeed/carspeed',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})