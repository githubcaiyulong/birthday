var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "风在吹它的叶子",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "草在结它的种子",  // 同上...
        "我们站着",
        "不说话",
        "就十分美好",
        "这是陪你过的第一个生日",
        "然后是每一个生日",
        "生日快乐",
        "——From",
        "大包子",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "风在吹它的叶子": "./imgs/10.jpg",   
        "草在结它的种子": "./imgs/88.jpg",  
        "我们站着": "./imgs/11.jpg",
        "不说话": "./imgs/22.jpg",
        "就十分美好": "./imgs/12.jpg",
        "这是陪你过的第一个生日": "./imgs/77.jpg",
        "然后是每一个生日": "./imgs/33.jpg",
        "生日快乐": "./imgs/44.jpg",
        "——From":"./imgs/55.jpg"
        "大包子": "./imgs/99.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "给小可爱的话",
    }
};
