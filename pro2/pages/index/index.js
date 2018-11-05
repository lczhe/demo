// pages/index/index.js
var weroot = "http://47.93.233.90/";
var app = getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    weroot:weroot,
    dzcg_flag : 1,
    zgc_flag: 1,
    input_flag:1
    // z: datainfo.prize.z,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var start='';
    var end  = '';
      wx.request({
        url: 'http://47.93.233.90/pro2/web/index.php?r=index/index',
        dataType:'json',
        success:function(e)
        {
          that.setData({datainfo:e.data});
          setInterval(that.gettime,1000)
          setInterval(that.minute,1000)
        }
      })
  },
  minute:function()
  {
    for (var index in this.data.datainfo.comment) {
      var _time = this.data.datainfo.comment[index]._time
      var day = parseInt((_time / 60 / 60 / 24));
      var hour = parseInt((_time / 60 / 60 % 60));
      var minute = parseInt((_time / 60 % 60));
      if (day != 0 || hour >= 23 && minute>=59)
      {
        var shi= day+"天"
      }
      if (day ==0 || hour != 23 && minute >=59)
      {
        var shi = hour + "时"
      }
      if (day == 0 && hour ==0 && minute<=59)
      {
        var shi = minute + "分"
      }
       var conmment ='\''+'datainfo.comment['+index+'].la_time'+'\''
      this.setData({'conmment':shi });
    }
    
  },
  // 定时器
  gettime:function()
  {
    // console.log(51)
    var _time = this.data.datainfo.prize._time;
    _time--;
    var day = parseInt((_time /60 / 60 /24));
    var hour = parseInt((_time/60/60%60));
    var minute = parseInt((_time / 60 %60));
    var second = parseInt((_time % 60));
    var hd = day + "天" + hour + "时" + minute + "分" + second + "秒"
    this.setData({ 'datainfo.prize._time': _time,'datainfo.prize.hd':hd});
  },
  //点击参与讨论 给出 消息框
  cytl:function()
  {
    this.setData({ input_flag: 0, zgc_flag: 0 })
  },
  // 发送消息 隐藏输入框
  fs:function()
  {
    this.setData({ input_flag: 1, zgc_flag:1})
  },
  /*修改 牛批的  点赞率*/
    pk: function (event) {
      var id = this.data.datainfo.prize.id
      var that = this;
      // console.log(event.currentTarget.id);
      wx.request({
        url: 'http://47.93.233.90/pro2/web/index.php?r=index/update',
        data: { 'action': event.currentTarget.id,'id':id},
        dataType: 'json',
        success: function (e) {
          that.setData({ 'datainfo.prize':e.data.prize})
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