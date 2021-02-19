function extend(Child, Parent) {
    function T () {}
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    Child.prototype.constructor = Child;
    Child.superClass = Parent.prototype;
    Child.baseConstructor = Parent;
    Child.super = function (inst) {
        var args = [].slice.call(arguments, 1);
        Parent.apply(inst, args);
    };
}

export {extend}