//Inspection 'Duplicate union or intersection type component' is ON
//TS 3.9.5

//Case1
function padLeft(value: string, padding: string | number | string) {
    return

}

padLeft('wall', 45);

//Case2
function extend(p: string): string & string & any {

    return
}


//Case3
function one12(x: number): number & number {

    return x * x
}

//Case4
interface Bird2 {
    fly(): void;

    layEggs(): void;
}

interface Fish2 {
    swim(): void;

    layEggs(): void;
}

declare function getSmallPet(): Fish2 | Bird2 | Bird2;

//Case5
type NetworkLoadingState = {
    state: "loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState
    | NetworkLoadingState


//Case6
interface IStudent {
    id: string;
    age: number;
}

interface IWorker {
    companyId: string;
}

type IAM = IStudent & IWorker & IStudent & IWorker
