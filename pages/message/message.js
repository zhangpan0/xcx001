// pages/message/message.js

var postsData = require("../testdata/newslist-data.js") //获取数据库中的数据，只能用相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 8,
    postList:[]
  },

  getSonCount(e) {
    console.log('ok')
    console.log(e.detail)
    this.setData({
      count: e.detail.count
    })
  },

  changeCountVal: function() {
    this.setData({
      count: this.data.count + 1
    })

    var component = this.selectComponent('.customA')
    console.log(component)
    console.log(component.data.name)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key:postsData.postList
    }); 
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