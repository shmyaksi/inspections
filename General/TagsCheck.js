function Thingy() {
    /** @private */
    this._barr = 1;

}
let th = new Thingy()
console.log(th._barr)

/** @namespace */
let Documents = {
    /**
     * An ordinary newspaper.
     */
    Newspaper: 1,
    /**
     * My diary.
     * @private
     */
    Diary: 2
};

console.log(Documents.Diary) // todo?

