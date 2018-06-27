import { DIRECTION_UP } from '../util/const'

export function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = 3

    this.pullupWatching = false
    this._watchPullUp()
  }

  BScroll.prototype._watchPullUp = function () {
    this.pullupWatching = true
    const {threshold = 0} = this.options.pullUpLoad

    this.on('scroll', checkToEnd)

    function checkToEnd(pos) {
      if (this.movingDirectionY === DIRECTION_UP && pos.y <= (this.maxScrollY + threshold)) {
        // reset pullupWatching status after scroll end.
        this.once('scrollEnd', () => {
          this.pullupWatching = false
        })
        this.trigger('pullingUp')
        this.off('scroll', checkToEnd)
      }
    }
  }

  BScroll.prototype.finishPullUp = function () {
    if (this.pullupWatching) {
      this.once('scrollEnd', () => {
        this._watchPullUp()
      })
    } else {
      this._watchPullUp()
    }
  }
}
