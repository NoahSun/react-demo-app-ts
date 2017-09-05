type InitialState = {
    loading: boolean;
    status: string;
    response: object | null;
    receiveAt: string;
};

interface ReteredInitialState {
    [reducerName: string]: InitialState;
}

const INITIAL_STATE: InitialState = {
    loading: false,
    status: '',
    response: null,
    receiveAt: ''
};

export default (reduceName: string | string[]): ReteredInitialState => {
    if (!Array.isArray(reduceName)) {
        return {
            [reduceName]: INITIAL_STATE
        };
    } else {
        const reducers: ReteredInitialState = {};
        reduceName.forEach(name => {
            reducers[name] = INITIAL_STATE;
        });
        return reducers;
    }
};
