//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dataJson: [{
      id: 0,
      name: "凶骨"
    }, {
      id: 1,
      name: "龙之牙"
    }, {
      id: 2,
      name: "八连双晶"
    }, {
      id: 3,
      name: "世界树之种"
    }, {
      id: 4,
      name: "凶骨"
    }],
    index: undefined,
    dropJson: [
      [{
        address: "第一章 X-E"
      }],
      [{
        address: "第一章 X-F"
      }],
      [{
        address: "第一章 X-G"
      }],
      [{
        address: "第一章 X-H"
      }],
      [{
        address: "第一章 X-I"
      }],
    ]
  },
  changePicker(e) {
    this.setData({
      index: e.detail.value
    })
  }
})
