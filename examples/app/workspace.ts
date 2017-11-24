/*!
 * @file This file is part of `examples` module. 
 * 
 * Authors:
 *      @author jason <jasonsoop@gmail.com>
 * 
 * @license Licensed under the MIT License.
 * @copyright Copyright (C) 2010-2017 Flagwind Inc. All rights reserved. 
 */

import Vue from "vue";
import { IWorkbench, IWorkspace, IView } from "flagwind-core";
import router from "../routers";

/**
 * 提供工作空间的常用功能。
 * @class
 * @version 1.0.0
 */
export class Workspace implements IWorkspace
{
    private _workbench: IWorkbench;                                 // 工作台

    public get workbench(): IWorkbench
    {
        return this._workbench;
    }
    
    /**
     * 初始化工作空间的新实例。
     * @constructor
     * @param  {newlife.IWorkbench} workbench
     */
    public constructor(workbench: IWorkbench)
    {
        // 保存工作台
        this._workbench = workbench;

        Vue.config.productionTip = false;

        let x = new Vue
        ({
            el: "#workspace",
            router,
            template: "<div><router-view /></div>"
        });
        
        console.log(x);
    }

    /**
     * 添加一个试图。
     * @param  {IView} view 试图实例。
     * @returns IView
     */
    public addView(view: IView): IView
    {
        return null;
    }
    
    /**
     * 从工作空间中移除指定试图。
     * @param  {string|IView} name 试图名称或试图实例。
     * @returns void
     */
    public removeView(name: string | IView): void
    {
        // todo
    }
    
    /**
     * 根据指定的名称获取一个试图实例。
     * @param  {string} name 试图名称。
     * @returns IView
     */
    public getView(name: string): IView
    {
        return null;
    }
}
