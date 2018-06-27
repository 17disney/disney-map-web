import { warn } from '../util/debug'

export function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function (index = 0) {
    console.log('wheelTo')
    if (this.options.wheel) {
      this.y = -index * this.itemHeight
      this.scrollTo(0, this.y)
    }
  }

  BScroll.prototype.getSelectedIndex = function () {
    return this.selectedIndex
  }

  BScroll.prototype._initWheel = function () {
    const wheel = this.options.wheel
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll'
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item'
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0
      warn('wheel option selectedIndex is required!')
    }
  }

  BScroll.prototype._getHorWheelIndex = function (x) {
    let {itemsWidth, itemsPos} = this

    x = Math.abs(x)
    let index = 0
    for (let i = 0; i < itemsPos.length; i++) {
      let pos = itemsPos[i]
      let maxX = pos + itemsWidth[i] / 2
      let minX = pos - itemsWidth[i] / 2
      if (minX < 0) minX = 0

      if (x >= minX && x < maxX) {
        index = i // -itemsPos[i]
      }
    }
    return index
  }
}
