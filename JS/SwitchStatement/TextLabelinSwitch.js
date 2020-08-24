//Inspection ' Text label in 'switch' statement' is OFF by default

//Case1
function CaseWithFor() {
    switch (x) {
        case 1:
            for (let i = 0; i < 4; i++) {
                x += i
            }
        case 3:
            break

    }
}

//case2
function caseTwo(i9) {
    i9 ??= "default"
    switch (i9) {
        case 'default':
            break
        case 'notdefault':
            console.log('notdefault')
    }

}

//case3
function caseWithObject() {
    const user1 = {
        admin() {
            console.log("I am admin")
        }

    }
    const user2 = {}

    switch (user1.admin) {
        case 'notadmin':
            user1.admin?.()
        case 'user2':
            user2.admin?.()
    }
}
