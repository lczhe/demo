// pages/index/index.js
var item = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'0',
    msg:[],
    data:'',
    ch:'1'
  },
  //获取 数
  shu:function(id){
      var shu = id.target.id
      var content = this.data.content
      if(content == '0')
      {
        var total = shu
      }else{
        var total = content +''+ shu
      }
      this.setData({ch:1,content:total})
  },
  //获取符号
  lab: function (id) {
    var fu= id.target.id
    var content = this.data.content;
    if(fu == '=')
    {
      this.data.data = this.data.data * content
      this.setData({ content: '', msg: '', data: this.data.data, ch: 0 })
    }else{
      switch(this.data.msg[item-1])
      {
        case '×': 
        if(this.data.data)
        {
          this.data.data = parseFloat(this.data.data) * parseFloat(content)
        }else{
          this.data.data = parseFloat(this.data.msg[item - 2]) * parseFloat(content);
        }break;
        case '÷':
          if (this.data.data) {
            this.data.data = parseFloat(this.data.data) / parseFloat(content);
          } else {
            this.data.data = parseFloat(this.data.msg[item - 2]) / parseFloat(content);
          } break;
        case '+':
          if (this.data.data) {
            this.data.data = parseFloat(this.data.data) + parseFloat(content);
          } else {
            this.data.data = parseFloat(this.data.msg[item - 2]) + parseFloat(content);
          } break;
        case '-':
          if (this.data.data) {
            this.data.data = parseFloat(this.data.data) - parseFloat(content);
          } else {
            this.data.data = parseFloat(this.data.msg[item - 2]) - parseFloat(content);
          } break;
      }
      this.data.msg[item] = content
      item++;
      this.data.msg[item] = fu
      item++;
    }
    this.setData({content:'',msg:this.data.msg,data:this.data.data,ch:0})
    // console.log(this.data.data)
  },
  //清除
  del:function(id)
  {
    var fu = id.target.id
    if(fu == 'CE')
    {
      this.setData({ content:0,ch: 1})
    } else if (fu == 'C'){
      this.setData({ content: '0', msg: '', data: '', ch: 1 })
    }
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