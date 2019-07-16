import Vue from 'vue';

interface Array<T> {
    add(o: T): void;
}
  
Array.prototype.add = function (o) {
    Vue.set(this, this.length, o)
}

type Constructor<T> = new(...args: any[]) => T;

const context: {[s: string]: any;} = {};

export function registry<T extends Constructor<{}>>(Service: T, key: string) {
  context[key] = Vue.observable(new Service());
}

const contextMixin = Vue.extend({
  provide: context,
});

export function get(key:string) {
  return context[key];
}

export { contextMixin };