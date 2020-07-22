function five<N = number, S = string>() {} //TODO
five<number, string>();
five<string, string>();
five<number, number>();

function f<N = number, S = string>() {}
f();
f<string,string>();
f<number, number>();
