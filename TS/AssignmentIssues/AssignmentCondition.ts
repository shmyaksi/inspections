//TS 3.9.5
//The inspection 'Assignment used as condition' is ON by default

//Case1
function c1() {
    let c;
    if (c = 9) return c
}


//Case2
function d1() {
    let d = 3;
    let v;
    while (d = 2)
        break;
}


//Case3
function e1() {
    let v;
    for (v = 0; v = 6; v++) {
        break;
        console.log(v)
    }
}


//Case4
function f1() {
    let f = -2;
    do
        f++;
    while (f = 0)
}


//Case5
function m3() {
    const response = {
        settings: {
            nullValue: null,
            height: 400,
            animationDuration: 0,
            headerText: '',
            showSplashScreen: false
        }
    }
    let undefinedValue: any;
    if (undefinedValue = 'hello') console.log('ok');
    const nullValue = response.settings.nullValue ?? 'some other default';

    console.log(undefinedValue);
    console.log(nullValue);
}

m3()


//Case6
class MyClass1 implements MyClass2 {
    private foo;

    constructor(foo) {
        this.foo = foo;
    }

    incFoo() {
        if (this.foo = 3) {
            return this.foo
        }

    }
}


interface MyClass2 {

}

//case7

function assign(a) {
    enum MyClass3 {
        first,
        second,
        third
    }

    if (a = MyClass3.first) {
        return ''
    }
}



