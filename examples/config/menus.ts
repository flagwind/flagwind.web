/*!
 * Authors:
 *      jason <jasonsoop@gmail.com>
 * 
 * Licensed under the MIT License.
 * Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

const menus =
[
    {
        title: "概览",
        path: "/intro",
        icon: "pie-graph"
    },
    {
        title: "组件",
        path: "/components",
        icon: "ios-keypad",
        children:
        [
            {
                title: "基本",
                path: "/components/generic",
                children:
                [
                    {
                        title: "颜色",
                        path: "/components/color",
                        icon: "android-color-palette"
                    },
                    {
                        title: "按钮",
                        path: "/components/button",
                        icon: "social-youtube-outline"
                    }
                ]
            }
        ]
    }
];

export default menus;
