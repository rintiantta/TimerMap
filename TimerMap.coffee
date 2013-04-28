class TimerMap
    constructor: (time = 1000) ->
        @object = {}
        @_timerObject = {}
    set: (key, value) ->
        clearTimeout @_timerObject[key].timer if @object[key]
        @object[key] = value
        @_timerObject[key] = setTimeout(() =>
            delete @object[key]
            delete @_timerObject[key]
        , @time)
        @this
    get: (key) ->
        return @object[key]


if exports && module && global
    exports = module.exports = TimerMap 
    exports.import = () ->
        global.TimerMap = TimerMap;