import calendar from '../../api/calendar';

const state = {
    trainings: []
}

const getters = {
    getTrainings: state => {
        return state.trainings
    },
    getDate: state => {
        return state.trainings.map(item => item.date)
    },
}

const actions = {
    getAllTrainings( { commit }) {
        commit('setCalendar', calendar.getTrainings())
    }
}

const mutations = {
    setCalendar(state, trainings) {
        state.trainings = trainings
        // trainings.forEach(element => {
        //     state.trainings.push(element)
        // });
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}