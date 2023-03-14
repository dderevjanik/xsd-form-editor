var generated_Module_Factory = function () {
  var generated = {
    name: 'generated',
    typeInfos: [{
        localName: 'ResourceType',
        typeName: 'resource_type',
        propertyInfos: [{
            name: 'type',
            required: true,
            typeInfo: '.EnumResource',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'amount',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'amount'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Empire.Border',
        typeName: null,
        propertyInfos: [{
            name: 'edge',
            required: true,
            collection: true,
            elementName: {
              localPart: 'edge'
            },
            typeInfo: '.EdgeType'
          }, {
            name: 'density',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'density'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DistantBattlePathType.Waypoint',
        typeName: null,
        propertyInfos: [{
            name: 'numMonths',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'num_months'
            },
            type: 'attribute'
          }, {
            name: 'x',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'InvasionPathType',
        typeName: 'invasion_path_type',
        propertyInfos: [{
            name: 'battle',
            required: true,
            collection: true,
            elementName: {
              localPart: 'battle'
            },
            typeInfo: '.InvasionPathType.Battle'
          }]
      }, {
        localName: 'Empire.DistantBattlePaths',
        typeName: null,
        propertyInfos: [{
            name: 'path',
            required: true,
            collection: true,
            elementName: {
              localPart: 'path'
            },
            typeInfo: '.DistantBattlePathType'
          }]
      }, {
        localName: 'Empire.InvasionPaths',
        typeName: null,
        propertyInfos: [{
            name: 'path',
            required: true,
            collection: true,
            elementName: {
              localPart: 'path'
            },
            typeInfo: '.InvasionPathType'
          }]
      }, {
        localName: 'Empire',
        typeName: null,
        propertyInfos: [{
            name: 'ornament',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'ornament'
            },
            typeInfo: '.Empire.Ornament'
          }, {
            name: 'border',
            elementName: {
              localPart: 'border'
            },
            typeInfo: '.Empire.Border'
          }, {
            name: 'cities',
            elementName: {
              localPart: 'cities'
            },
            typeInfo: '.Empire.Cities'
          }, {
            name: 'invasionPaths',
            elementName: {
              localPart: 'invasion_paths'
            },
            typeInfo: '.Empire.InvasionPaths'
          }, {
            name: 'distantBattlePaths',
            elementName: {
              localPart: 'distant_battle_paths'
            },
            typeInfo: '.Empire.DistantBattlePaths'
          }, {
            name: 'version',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'showIreland',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'show_ireland'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EmpireCityType',
        typeName: 'empire_city_type',
        propertyInfos: [{
            name: 'buys',
            elementName: {
              localPart: 'buys'
            },
            typeInfo: '.EmpireCityType.Buys'
          }, {
            name: 'sells',
            elementName: {
              localPart: 'sells'
            },
            typeInfo: '.EmpireCityType.Sells'
          }, {
            name: 'tradePoints',
            elementName: {
              localPart: 'trade_points'
            },
            typeInfo: '.EmpireCityType.TradePoints'
          }, {
            name: 'name',
            required: true,
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'x',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: '.EnumEmpireCityType',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'tradeRouteCost',
            typeInfo: 'Int',
            attributeName: {
              localPart: 'trade_route_cost'
            },
            type: 'attribute'
          }, {
            name: 'tradeRouteType',
            typeInfo: '.EnumTradeType',
            attributeName: {
              localPart: 'trade_route_type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DistantBattlePathType',
        typeName: 'distant_battle_path_type',
        propertyInfos: [{
            name: 'waypoint',
            required: true,
            collection: true,
            elementName: {
              localPart: 'waypoint'
            },
            typeInfo: '.DistantBattlePathType.Waypoint'
          }, {
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }, {
            name: 'startX',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'start_x'
            },
            type: 'attribute'
          }, {
            name: 'startY',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'start_y'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'InvasionPathType.Battle',
        typeName: null,
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EmpireCityType.Buys',
        typeName: null,
        propertyInfos: [{
            name: 'resource',
            required: true,
            collection: true,
            elementName: {
              localPart: 'resource'
            },
            typeInfo: '.ResourceType'
          }]
      }, {
        localName: 'Empire.Cities',
        typeName: null,
        propertyInfos: [{
            name: 'city',
            required: true,
            collection: true,
            elementName: {
              localPart: 'city'
            },
            typeInfo: '.EmpireCityType'
          }]
      }, {
        localName: 'EdgeType',
        typeName: 'edge_type',
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }, {
            name: 'hidden',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'hidden'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Empire.Ornament',
        typeName: null,
        propertyInfos: [{
            name: 'type',
            required: true,
            typeInfo: '.EnumOrnament',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EmpireCityType.Sells',
        typeName: null,
        propertyInfos: [{
            name: 'resource',
            required: true,
            collection: true,
            elementName: {
              localPart: 'resource'
            },
            typeInfo: '.ResourceType'
          }]
      }, {
        localName: 'EmpireCityType.TradePoints',
        typeName: null,
        propertyInfos: [{
            name: 'point',
            required: true,
            collection: true,
            elementName: {
              localPart: 'point'
            },
            typeInfo: '.TradePoint'
          }]
      }, {
        localName: 'TradePoint',
        typeName: 'trade_point',
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'Int',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'EnumOrnament',
        values: ['The Stonehenge', 'Gallic Wheat', 'The Pyrenees', 'Iberian Aqueduct', 'Triumphal Arch', 'West Desert Wheat', 'Lighthouse of Alexandria', 'West Desert Palm Trees', 'Trade Ship', 'Waterside Palm Trees', 'Colosseum|The Colosseum', 'The Alps', 'Roman Tree', 'Greek Mountain Range', 'The Parthenon', 'The Pyramids', 'The Hagia Sophia', 'East Desert Palm Trees', 'East Desert Wheat', 'Trade Camel', 'Mount Etna', 'Colossus of Rhodes']
      }, {
        type: 'enumInfo',
        localName: 'EnumEmpireCityType',
        values: ['ours', 'roman', 'distant', 'trade', 'vulnerable']
      }, {
        type: 'enumInfo',
        localName: 'EnumResource',
        values: ['wheat', 'vegetables', 'fruit', 'olives', 'vines', 'meat', 'fish', 'wine', 'oil', 'iron', 'gold', 'clay', 'marble', 'weapons', 'furniture', 'pottery', 'timber']
      }, {
        type: 'enumInfo',
        localName: 'EnumTradeType',
        values: ['land', 'sea']
      }],
    elementInfos: [{
        typeInfo: '.Empire',
        elementName: {
          localPart: 'empire'
        }
      }]
  };
  return {
    generated: generated
  };
};
if (typeof define === 'function' && define.amd) {
  define([], generated_Module_Factory);
}
else {
  var generated_Module = generated_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.generated = generated_Module.generated;
  }
  else {
    var generated = generated_Module.generated;
  }
}