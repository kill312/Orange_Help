//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },
  goto_register:function(){
    wx.navigateTo({
      url: '../second-index/register/register'
    })
  },
  goto_accounting: function () {
    wx.navigateTo({
      url: '../second-index/accounting/accounting'
    })
  },
  goto_enterprise: function () {
    wx.navigateTo({
      url: '../second-index/enterprise/enterprise'
    })
  },
  goto_finite: function () {
    wx.navigateTo({
      url: '../second-index/finite/finite'
    })
  },
  goto_cooperation: function () {
    wx.navigateTo({
      url: '../second-index/cooperation/cooperation'
    })
  },
  goto_personal: function () {
    wx.navigateTo({
      url: '../second-index/personal/personal'
    })
  },
  goto_branch: function () {
    wx.navigateTo({
      url: '../second-index/branch/branch'
    })
  },
  goto_commonly: function () {
    wx.navigateTo({
      url: '../second-index/commonly/commonly'
    })
  },
  goto_small: function () {
    wx.navigateTo({
      url: '../second-index/small/small'
    })
  },
  goto_address: function () {
    wx.navigateTo({
      url: '../second-index/address/address'
    })
  },
  goto_law: function () {
    wx.navigateTo({
      url: '../second-index/Law/Law'
    })
  },
  goto_thigh: function () {
    wx.navigateTo({
      url: '../second-index/thigh/thigh'
    })
  },
  goto_money: function () {
    wx.navigateTo({
      url: '../second-index/money/money'
    })
  },
  goto_free: function () {
    wx.navigateTo({
      url: '../second-index/free/free'
    })
  },
  goto_invoice: function () {
    wx.navigateTo({
      url: '../second-index/invoice/invoice'
    })
  },
  onLoad: function () {
  }
})    

