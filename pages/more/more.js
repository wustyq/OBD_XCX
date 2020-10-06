// pages/more/more.js
Page({
   /**
   * 页面的初始数据
   */
  data: {
    flag: 1,
    identity: ''
  },
  click1: function(event){
    this.setData({
      flag: 1
    })
  },
  click2: function(event){
    this.setData({
      flag: 2
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
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