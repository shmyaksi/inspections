//Inspection ' Text label in 'switch' statement' is OFF by default

//Case1
function txt1() {
    switch (x) {
        case 1:
            case2: for (let i = 0; i < 4; i++) {
                x += i;
            }
        case 3:
            break;

    }
}

//case2
function txt2(i9) {
    i9 ??= "default";
    switch (i9) {
        case 'default':
            break;
        case 'notdefault':
            case3: console.log('notdefault');
    }

}

//case3
function s24() {
    const user1 = {
        admin() {
            console.log("I am admin");
        }

    }
    const user2 = {};

    switch (user1.admin) {
        case 'notadmin':
            case1:user1.admin?.();
        case 'user2':
            user2.admin?.();
    }
}
