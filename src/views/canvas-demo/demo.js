
/*

作用域插槽的本质是方法，而这个方法就是scopedSlots.xxx 这个方法接收的参数就是传递的变量 其实等价于 <slot v-bind="props"/>

*/
export default {
    functional: true,
    render: (h, ctx) => {
        return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
    }
};
