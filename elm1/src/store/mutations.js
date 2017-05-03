/**
 * Created by liumingtai on 2017-5-2.
 callme 17602014220
 github:https://github.com/lazyTai
 */

import {SET_HOME} from './mutations-type'

export  default {
  [SET_HOME](state, payLoad){
    state.home = "home" + JSON.stringify(payLoad)
  }
}
