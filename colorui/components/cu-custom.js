const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
    urlBack: {
      type: String,
      default: ''
    },
    urlHome: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.redirectTo({
        url: this.properties.urlBack,
      })
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
  }
})