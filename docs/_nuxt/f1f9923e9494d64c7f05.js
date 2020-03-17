;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    288: function(e, t, r) {
      var content = r(301)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(22).default)('5a511a7d', content, !0, { sourceMap: !1 })
    },
    300: function(e, t, r) {
      'use strict'
      var n = r(288)
      r.n(n).a
    },
    301: function(e, t, r) {
      ;(t = r(21)(!1)).push([e.i, '.chart{width:100%;height:500px}', '']),
        (e.exports = t)
    },
    317: function(e, t, r) {
      'use strict'
      r.r(t)
      r(297), r(61)
      var n = r(315),
        l = r(314),
        o = r(316)
      n.e(o.a)
      var d = {
          name: 'Chart',
          mounted: function() {
            var e = n.d(this.$refs.chartdiv, l.f)
            ;(e.paddingRight = 10),
              (e.dataSource.url = '/covid19-venezuela/2020-16-03.csv'),
              (e.dataSource.parser = new n.a()),
              (e.dataSource.parser.options.useColumnNames = !0),
              (e.exporting.menu = new n.b()),
              (e.exporting.menu.align = 'right'),
              (e.exporting.menu.verticalAlign = 'bottom'),
              (e.xAxes.push(new l.a()).dataFields.category = 'date')
            var t = e.yAxes.push(new l.e())
            ;(t.tooltip.disabled = !0), (t.renderer.minWidth = 35)
            var r = e.series.push(new l.d())
            ;(r.dataFields.valueY = 'confirmados'),
              (r.dataFields.categoryX = 'date'),
              (r.name = 'Confirmados'),
              (r.strokeWidth = 3),
              (r.fill = n.c('#3298dc')),
              (r.stroke = n.c('#3298dc')),
              r.bullets.push(new l.b())
            var o = e.series.push(new l.d())
            ;(o.dataFields.valueY = 'sanados'),
              (o.dataFields.categoryX = 'date'),
              (o.name = 'Sanados'),
              (o.strokeWidth = 3),
              (o.fill = n.c('#48c774')),
              (o.stroke = n.c('#48c774')),
              o.bullets.push(new l.b())
            var d = e.series.push(new l.d())
            ;(d.dataFields.valueY = 'fallecidos'),
              (d.dataFields.categoryX = 'date'),
              (d.name = 'Fallecidos'),
              (d.strokeWidth = 3),
              (d.fill = n.c('#f14668')),
              (d.stroke = n.c('#f14668')),
              d.bullets.push(new l.b()),
              (r.tooltipText = '{valueY.value}'),
              (o.tooltipText = '{valueY.value}'),
              (d.tooltipText = '{valueY.value}'),
              (e.cursor = new l.h())
            var c = new l.g()
            c.series.push(r), (e.scrollbarX = c), (e.legend = new l.c())
          },
          beforeDestroy: function() {
            this.chart && this.chart.dispose()
          }
        },
        c = (r(300), r(9)),
        h = {
          components: {
            Chart: Object(c.a)(
              d,
              function() {
                var e = this.$createElement
                return (this._self._c || e)('div', {
                  ref: 'chartdiv',
                  staticClass: 'chart'
                })
              },
              [],
              !1,
              null,
              null,
              null
            ).exports
          }
        },
        v = Object(c.a)(
          h,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t('div', [t('Chart')], 1)
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = v.exports
    }
  }
])
