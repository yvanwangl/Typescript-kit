import * as React from 'react';

//对象类型
export interface HelloProps {
    compiler?: string;
    framework: string;
    [propName: string]: any;
}

export enum Color {
    Red = 1,
    Green,
    Blue
}

//函数类型
export interface SearchFunc {
    (target: string, subString: string): boolean;
}

let searchStr: SearchFunc;
searchStr = (target: string, subString: string) => target.indexOf(subString)>-1;

const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework} and {Color[1]}!</h1>;
export default Hello;