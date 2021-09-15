const state = {
    sidebarShow: false
}

const mutations = {
    /**
     * @show {Boolean} - Состояние показа сайдбара
     */
    setSidebarShow(state, show) {
        state.sidebarShow = show
    }
}

const getters = {
    getSidebarShow: state => state.sidebarShow
}

export default {
    state,
    mutations,
    getters
}
