// pages/challenge/challenge.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    /**
     * 难度选择弹窗
     */
    // 联想法调用
    choiceDifficulty0: function () {
        const list = ["简单", "一般", "困难", "噩梦"]
        wx.showActionSheet({
            itemList: list,
            success(res) {
                wx.navigateTo({
                    url: "/pages/challenge/association/association?difficulty=" + list[res.tapIndex],
                })
            }
        })
    },
    // 图像法调用
    choiceDifficulty1: function () {
        wx.showActionSheet({
            itemList: ["简单", "一般", "困难", "噩梦"],
            success(res) {
                wx.showModal({
                    title: '提示',
                    confirmText: '确定',
                    cancelText: '取消',
                    content: '点击确定，演示3完成',
                    success: function (res) {
                        if (res.confirm) {
                            console.log("确定")
                        } else if (res.cancel) {
                            console.log("确定")
                        }
                    }
                 })
            }
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