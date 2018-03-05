import parkApi from '@/api/park'
// import moment from 'moment'
import { lineToObject } from '@/utils/tool'
import { landName } from '@/utils/filter'
import coordtransform from '@/utils/coordtransform'

const user = {
  state: {
    local: 'shanghai',
    list: []
  },
  mutations: {
    SET_LIST: (state, data) => {
      state.list = data
    }
  },
  actions: {
    // 获取项目列表
    async getDestinationsList({ commit, state }, type) {
      let key = `destinationsList-${type}`
      let data = await parkApi.explorerDestinations(state.local, type)

      data.forEach(item => {
        let { id, ancestors } = item
        item.aid = lineToObject(id)['__id__']

        for (let ancestorsItem of ancestors) {
          if (ancestorsItem.type === 'land') {
            item.landName = landName(ancestorsItem.id)
          }
        }

        item.type = item.type.toLowerCase()

        // 提取坐标
        item.coordinates = [0, 0]
        if (
          item.relatedLocations &&
          item.relatedLocations[0] &&
          item.relatedLocations[0]['coordinates'] &&
          item.relatedLocations[0]['coordinates'][0]
        ) {
          let coordinates = item.relatedLocations[0]['coordinates'][0]
          let { latitude, longitude } = coordinates
          coordinates = [latitude, longitude].map(parseFloat)
          coordinates[0] = coordinates[0] + 0.0003
          coordinates[1] = coordinates[1] - 0.0001
          // coordinates = coordtransform.bd09togcj02(...coordinates)
          item.coordinates = coordinates
        }

        item.finderListMobileSquare = item.medias.filter(_ => {
          return _.type === 'finderListMobileSquare'
        })[0]


      })
      // this.updateCache(key, data)
      commit('SET_LIST', data)
    }
  }
}

export default user
