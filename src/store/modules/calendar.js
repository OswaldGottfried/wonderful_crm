import calendar from '../../api/calendar';

const state = {
    date: null,
    trainingTitle: "",
    trainer: "",
    pupils: []
}

const getters = {
    calendar(state) {
        return state.calendar
    }
}

const actions = {
    getAllTrainings( { commit }) {
        calendar.getTrainings(trainings => {
            commit('setCalendar', trainings)
        })
    }
}

// eslint-disable-next-line
console.log(calendar.getTrainings())

const mutations = {
    setCalendar(state, trainings) {
        state.calendar = trainings
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}