// Define app store actions names
export const ACTION_APP_INCREMENT = "ActionAppIncrement"
export const ACTION_APP_DECREMENT = "ActionAppDecrement"
export const ACTION_APP_RESET = "ActionAppReset"

// Define app store mutations names
const INCREMENT_VALUE = "IncrementValue"
const DECREMENT_VALUE = "DecrementValue"
const RESET_VALUE = "ResetValue"

// Initial app state
const state = {
    counter: 0
}

const getters = {
    getCounter(state) {
        return state.counter
    }
}

const actions = {
    [ACTION_APP_INCREMENT]({commit}, count){
        commit(INCREMENT_VALUE, count);
    },
    [ACTION_APP_DECREMENT]({commit}, count){
        commit(DECREMENT_VALUE, count);
    },
    [ACTION_APP_RESET]({commit}){
        commit(RESET_VALUE);
    }
}

const mutations = {
    [INCREMENT_VALUE](state, count){
        state.counter += count
    },
    [DECREMENT_VALUE](state, count){
        state.counter -= count
    },
    [RESET_VALUE](state){
        state.counter = 0
    }
}

export default {
    state,
    actions,
    mutations,
    getters
  }