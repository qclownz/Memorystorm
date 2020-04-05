// pages/challenge/association/association.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isHideNextBtn: false,
        isHideTestBtn: true,
        itemList: ["狗", "猫", "鸡", "鸭"],
        currentIndex: 0,

    },
    /**
     * 切换下一个词汇
     */
    next: function() {
        var list = this.data.itemList
        var index = this.data.currentIndex
        if (index < list.length) {
            index++
            this.setData({
                currentIndex: index,
            });
            if (index == list.length) {
                this.setData({
                    isHideNextBtn: true,
                    isHideTestBtn: false,
                });
            }
        }
    },
    /**
     * 开始答题
     */
    test: function() {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            difficulty: options['difficulty'],
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})