// pages/second/second.js
Page({
   /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '冀D12345', value: 0 },
      { text: '豫LN8265', value: 1 },
      { text: '豫LH6606', value: 2 },
    ],
    value1: 0,
  },
  
  rl: function(){
    wx.redirectTo({
      url: '/pages/rl/rl',
    })
  },
  ns: function(){
    wx.redirectTo({
      url: '/pages/ns/ns',
    })
  },
  pm: function(){
    wx.redirectTo({
      url: '/pages/pm/pm',
    })
  },
  no: function(){
    wx.redirectTo({
      url: '/pages/no/no',
    })
  },
  map: function(){
    wx.redirectTo({
      url: '/pages/map/map',
    })
  },
  more: function(){
    wx.redirectTo({
      url: '/pages/more/more',
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