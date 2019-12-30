//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        msg: "你好世界",
        arr:[
            {
                id:1,
                name:"one"
            },
            {
                id:2,
                name:"two"
            }
        ]
    },
    onLoad(){
        console.log(app.globalData.name)
    },
    btns(){
        const msg = this.data.msg.split("").reverse().join("")
        this.setData({msg})
    },
    users(event){
        console.log(event)
    }
})