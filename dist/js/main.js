requirejs.config({
    baseUrl: "js",
    paths : {
        //新名字：旧名字
        //所有依赖
        "html5shiv":"html5shiv.min",
         "jquery": "../lib/jquery-1.10.1.min",
         "city": "../lib/kuCity",
         "common": "common",
         "sliderimg": "sliderimg",
         "base": "base",
         "index": "index",
    },
    // 设置依赖关系
    shim:{
        'html5shiv':{
            deps: ["jquery"]
        },
        'city':{
            deps: ["jquery"]
        },
        'common':{
            deps: ["jquery"]
        },
        'sliderimg':{
            deps: ["common"]
        },
        'base':{
            deps: ["common"]
        },
        'index':{
            deps: ["base"]
        }
    }
});

