// inspection 'Unreachable 'case' branch of a 'switch' statement' is ON by default


//todo add cases


//Case1
enum Boo123 {
    A, B, C
}

function qqq(p: Boo123.A | Boo123.B) {
    switch (p) {
        case Boo123.A :
            break;
        case Boo123.B :
            break;
        case Boo123.C :
            break;
    }
}


