import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';


const initialState = {
    sport: {
        id: 224,
        name: 'swimming',
        description: "Swimming includes several sports that are practiced on the surface and/or under the water. It allows you to use your whole body to move, sometimes in speed trials, sometimes in artistic routines, but requiring at all times a great coordination. Above all, thanks to the effect of gravity, swimming helps to minimize the impact of force on your body and joints, in addition to being a complete and very accessible sport that can easily allow you to feel like a fish in the water!\n",
        icon: "https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/224/224.svg"
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
                sport: {},
                isFetching: true,
                error: ""
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                person: action.payload,
                error: ""
            })
        case(FETCH_FAIL):
            return({
                ...state,
                sport:{},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}