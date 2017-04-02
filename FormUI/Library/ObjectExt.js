function ObjectExt() {
    this.extend = function (rawobj, extobj) {
        for (pro in extobj) {
            rawobj[pro] = extobj[pro];
        }
        return rawobj;
    }
};

module.exports = ObjectExt;
