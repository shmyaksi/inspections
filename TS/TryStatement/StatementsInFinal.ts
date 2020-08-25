//inspection 'continue' or 'break' inside 'finally' block' is ON by default
//TS 3.9.5

//Case1
function breakInFinallyIssue() {
    let a = 0
    for (let i = 0; i < 3; i++) {
        try {
            a = 1 / 0
        } finally {
            break
        }
    }

}

//Case2
function breakInFinallyIssue1() {
    let a = 0
    for (let i = 0; i < 3; i++) {
        try {
            a = 1 / 0
            break
        } finally {
            continue
        }

    }

}

//Case3
function getUser(): { name: string; age?: number } {
    return
    for (let i = 0; i < 3; i++) {
        try {
            function mn() {
            }
        } finally {
            break;
        }
    }


}
