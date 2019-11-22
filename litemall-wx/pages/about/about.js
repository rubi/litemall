// about.js
var app = getApp()
var util = require("../../utils/util.js");


var api = require("../../config/api.js");
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		load_statue: true,
		shopInfo: {
			name: '襄阳永力通机械有限公司',
			address: '襄阳市高新区邓城大道邓城工业园',
			latitude: 32.099734,
			longitude: 112.106235,
			linkPhone: '0710-3725679',
			qqNumber: '1242607804',
			version: '1.0.7'
		},
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	showLocation: function (e) {
		var that = this
		wx.openLocation({
			latitude: that.data.shopInfo.latitude,
			longitude: that.data.shopInfo.longitude,
			name: that.data.shopInfo.name,
			address: that.data.shopInfo.address,
		})
	},
	callPhone: function (e) {
		var that = this
		wx.makePhoneCall({
			phoneNumber: that.data.shopInfo.linkPhone,
		})
	},
	reLoad: function (e) {
		this.loadShopInfo();
	}
})