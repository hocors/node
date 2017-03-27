function jsobject() {
    this.extend = function (rawobj, extobj) {
        for (pro in extobj) {
            rawobj[pro] = extobj[pro];
        }
        return rawobj;
    }
};

module.exports = jsobject;
