const ATT_TYPE = [
  {
    name: '上海迪士尼度假区',
    id: 'destination',
    icon: '',
    showTab: false
  },
  {
    name: '周围景点',
    id: 'entertainment-venue',
    icon: '',
    showTab: false
  },

  {
    name: '主题园区',
    id: 'land',
    icon: '',
    showTab: false
  },
  {
    name: '游乐项目',
    id: 'attraction',
    icon: 'attractions',
    showTab: true
  },
  {
    name: '娱乐演出',
    id: 'entertainment',
    icon: 'entertainment',
    showTab: true
  },

  {
    name: '餐饮',
    id: 'restaurant',
    icon: 'dining',
    showTab: true
  },
  {
    name: '商店',
    id: 'merchandisefacility',
    icon: 'in-park-shopping',
    showTab: true
  },
  {
    name: '洗手间',
    id: 'fadsgfad',
    icon: 'restrooms',
    showTab: false
  },
  {
    name: '迪士尼乐拍通',
    id: 'fadsgfad3sadf2',
    icon: 'photo-pass-plus',
    showTab: false
  },
  {
    name: '主题活动',
    id: 'event',
    icon: 'tours-events',
    showTab: true
  },
  {
    name: '游客服务',
    id: 'evenadsfsfdt',
    icon: 'information',
    showTab: false
  },
  {
    name: '酒店',
    id: 'resort',
    icon: 'resorts',
    showTab: true
  },
  {
    name: '休闲活动',
    id: 'playsfd',
    icon: 'disneyland-recreation',
    showTab: false
  }
]

const ATT_HOT_LIST = [
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

const LAND_NAME = {
  landTomorrowland: '明日世界',
  landGardensOfImagination: '奇想花园',
  landAdventureIsle: '探险岛',
  landFantasyland: '梦幻世界',
  landTreasureCove: '宝藏湾',
  landMickeyAvenue: '米奇大街'
}

module.exports = {
  ATT_TYPE,
  ATT_HOT_LIST,
  LAND_NAME
}
