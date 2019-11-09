$(function () {
    // 需要的数据
    var mountData = [
        { quantity: '50%', value: 80, total: 50, },
        { quantity: '50%', value: 80, total: 50, },
        { quantity: '50%', value: 80, total: 50, },
        { quantity: '50%', value: 80, total: 50, },
        { quantity: '50%', value: 80, total: 50, }
    ]
    //获取页面中的增长百分比写入数据
    for (let i = 0; i < $('.quantity').length; i++) {
        for(let j = 0; j< mountData.length;j++){
            if(i === j){
                $('.quantity')[i].innerText = mountData[j].quantity
            }
        }
        
    }
    let seriesData = [
        {
            name: '总车辆数量',
            type: 'pie',
            startAngle: randomNum(0, 359),
            clockWise: false, //顺时加载
            hoverAnimation: true, //鼠标移入变大
            radius: ['55%', '60%'],
            center: ["50%", "65%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // offset:[30,40]
                    },
                    labelLine: {
                        show: true,
                        length: 35,
                        length2: 25,
                        color: "#fff",
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "#2b92ff",
                }
            },
            data: [{
                name: "80%",
                value: 80,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#2b92ff'
                        }, {
                            offset: 1, color: '#2513ff'
                        }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                value: 80,
                selected: false,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }]
        },
        {

            name: '总事故数量',
            type: 'pie',

            startAngle: randomNum(0, 359),
            clockWise: false, //顺时加载
            hoverAnimation: true, //鼠标移入变大
            radius: ['43%', '48%'],
            center: ["50%", "65%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // offset:[30,40]
                    },
                    labelLine: {
                        show: true,
                        length: 35,
                        length2: 25,
                        color: "#fff",
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "#41f6a4",

                }
            },
            data: [{
                name: "60%",
                value: 26,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#41f6a4'
                        }, {
                            offset: 1, color: '#0adbe5'
                        }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                value: total - 26,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }]
        },
        {
            name: '总服务点数',
            type: 'pie',
            startAngle: randomNum(0, 359),
            clockWise: true, //顺时加载
            hoverAnimation: true, //鼠标移入变大
            radius: ['31%', '36%'],
            center: ["50%", "65%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // offset:[30,40]
                    },
                    labelLine: {
                        show: true,
                        length: 35,
                        length2: 25,
                        color: "#fff",
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "#ff346d",

                }
            },
            data: [{
                name: "40%",
                value: 26,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#ff346d'
                        }, {
                            offset: 1, color: '#ff58b0'
                        }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                value: total - 26,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }]
        },
        {
            name: '总骑行里程',
            type: 'pie',
            startAngle: randomNum(0, 359),
            clockWise: false, //顺时加载
            hoverAnimation: true, //鼠标移入变大
            radius: ['19%', '24%'],
            center: ["50%", "65%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // offset:[30,40]
                    },
                    labelLine: {
                        show: true,
                        length: 35,
                        length2: 25,
                        color: "#fff",
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "#8f14fe",

                }
            },
            data: [{
                name: "60%",
                value: 99,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#8f14fe'
                        }, {
                            offset: 1, color: '#3714fe'
                        }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                value: total - 28,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }]
        },
        {
            name: '总会员人数',
            type: 'pie',
            startAngle: randomNum(0, 359),
            clockWise: true, //顺时加载
            hoverAnimation: true, //鼠标移入变大
            radius: ['8%', '12%'],
            center: ["50%", "65%"],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        // offset:[30,40]
                    },
                    labelLine: {
                        show: true,
                        length: 35,
                        length2: 25,
                        color: "#fff",
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: "#ffd702",
                }
            },
            data: [
                {
                    name: "60%",
                    value: 99,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffd702'
                            }, {
                                offset: 1, color: '#ffa900'
                            }
                            ],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value: total - 28,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },
    ]
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
    var total = 100;
    var myChart = echarts.init(document.getElementById('pie'));
    option = {
        title: {
            text: '数据增长百分比',
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            left: '5%',
            top: 15,
        },
        tooltip: {
            show: true,
            trigger: 'item',//提示框触发类型，item数据项图形触发，主要应用于无类目轴的图表（散点图、饼形图等）
            formatter: function (params, ticket, callback) {//第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
                return params.seriesName + ": " + params.name;//系列名称：数据值
            }
        },
        color: [
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#2513ff'
                }, {
                    offset: 1, color: '#2b92ff'
                },

                ],
                global: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#41f6a4'
                }, {
                    offset: 1, color: '#0adbe5'
                },

                ],
                global: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#ff346d'
                }, {
                    offset: 1, color: '#ff58b0'
                },

                ],
                global: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#3714fe'
                }, {
                    offset: 1, color: '#e850ff'
                },

                ],
                global: false // 缺省为 false
            },
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#ffd702'
                }, {
                    offset: 1, color: '#ffa900'
                },

                ],
                global: false // 缺省为 false
            }
        ],//调色盘颜色列表，默认情况下图例和饼形环图颜色使用
        legend: {
            top: "0px",
            left: "0px",
            itemHeight: 20,//图例的高度
            padding: [50, 100, 0, 20],
            itemGap: 10,//图例之间的间距      
            data: ['总车辆数量', '总事故数量', '总服务点数', '总骑行里程', '总会员人数'],//图例的数据数组
            textStyle: {
                color: []
            },
            selectedMode: false,//图例选择模式
            orient: "horizontal"//图例布局方式
        },
        series: [
            {
                // name: '总车辆数量',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                cursor: 'default',
                tooltip: {
                    show: false
                },
                startAngle: randomNum(0, 359),
                radius: ['65%', '67%'],
                center: ["50%", "65%"],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            // offset:[30,40]
                        },
                        labelLine: {
                            show: true,
                            length: 35,
                            length2: 25,
                            color: "#fff",
                        }
                    }
                },
                label: {
                    normal: {
                        show: false,
                        color: "#fff",
                    }
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
                data: [{
                    name: "80%",
                    value: 60,
                    itemStyle: {
                        color: 'rgba(13,85,159,0.5)',
                        // color: '#094282'//正常颜色
                        emphasis: { color: 'rgba(13,85,159,0.3)' }, //鼠标移入颜色
                    },

                },
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        },
                    }
                }]
            },
        ],
        grid: [
            {
                bottom: 50,
            }
        ]
    };
    seriesData.map(v => {
        option.series.push(v)
    })
    let newSeries = option.series.shift()
    option.series.push(newSeries)
    for (let i = 0; i < option.series.length; i++) {
        for (let j = 0; j < mountData.length; j++) {
            if (i === j) {
                option.series[i].data[0].name = mountData[j].quantity;
                option.series[i].data[0].value = mountData[j].value;
                option.series[i].data[1].value = mountData[j].total;
            }
        }
    }
    
    myChart.setOption(option);
    
})