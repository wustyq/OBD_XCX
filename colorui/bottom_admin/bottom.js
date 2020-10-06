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
    bint: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    bint: 1,
  },
  /**
   * 组件的方法列表
   * 
   */
  methods: {
    zl(){
      wx.redirectTo({
        url: '/pages/count/count',
      })
    },
    ls(){
      wx.redirectTo({
        url: '/pages/second2/second2',
      })
    },
    wd(){
      wx.redirectTo({
        url: '/pages/my_admin/my_admin',
      })
    }
  }
})