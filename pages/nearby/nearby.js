// pages/nearby/nearby.js
//获取应用实例
const app = getApp()

Page({
  data: {
    region: ['广东省', '佛山市', '顺德区']
  },

  bindPickerCity: function (e) {
    console.log("选择的城市:", e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function () {

  }
})
