const attType = [
  {
    name: '上海迪士尼度假区',
    id: 'destination',
    showTab: false
  },
  {
    name: '主题园区',
    id: 'land',
    showTab: false
  },
  {
    name: '游乐项目',
    id: 'attraction',
    showTab: true
  },
  {
    name: '娱乐演出',
    id: 'entertainment',
    showTab: true
  },
  {
    name: '周围景点',
    id: 'entertainment-venue',
    showTab: false
  },
  {
    name: '餐饮',
    id: 'restaurant',
    showTab: true
  },
  {
    name: '商店',
    id: 'merchandisefacility',
    showTab: true
  },
  {
    name: '主题活动',
    id: 'event',
    showTab: true
  },
  {
    name: '酒店',
    id: 'resort',
    showTab: false
  },
  {
    name: '主题乐园',
    id: 'theme-park',
    showTab: false
  },
  {
    name: 'The BOATHOUSE™',
    id: 'restaurant',
    showTab: false
  }
]

const attHotList = [
  {
    id: 'attSoaringOverHorizon;entityType=Attraction;destination=shdr',
    aid: 'attSoaringOverHorizon',
    name: '翱翔•飞越地平线'
  },
  {
    id: 'attRoaringRapids;entityType=Attraction;destination=shdr',
    aid: 'attRoaringRapids',
    name: '雷鸣山漂流'
  },
  {
    id: 'attTronLightcyclePowerRun;entityType=Attraction;destination=shdr',
    aid: 'attTronLightcyclePowerRun',
    name: '创极速光轮'
  },
  {
    id: 'attBuzzLightyearPlanetRescue;entityType=Attraction;destination=shdr',
    aid: 'attBuzzLightyearPlanetRescue',
    name: '巴斯光年星际营救'
  },
  {
    id: 'attSevenDwarfsMineTrain;entityType=Attraction;destination=shdr',
    aid: 'attSevenDwarfsMineTrain',
    name: '七个小矮人矿山车'
  },
  {
    id: 'attAdventuresWinniePooh;entityType=Attraction;destination=shdr',
    aid: 'attAdventuresWinniePooh',
    name: '小熊维尼历险记'
  },
  {
    id: 'attPeterPansFlight;entityType=Attraction;destination=shdr',
    aid: 'attPeterPansFlight',
    name: '小飞侠天空奇遇'
  }
]

exports.attHotList = attHotList

exports.attType = attType
exports.attTypeTab = {
  list: attType.filter(_ => _.showTab),
  selectedId: 'attraction'
}
