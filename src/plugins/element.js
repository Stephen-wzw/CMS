import {
  Row,
  Col, 
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Input,
  Select,
  Option,
  OptionGroup,
  Loading,
  Backtop,
  Form,
  FormItem,
  Avatar,
} from 'element-ui';

const element = {
  install: function(Vue) {
    Vue.use(Container)
    Vue.use(Button)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Input)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(OptionGroup)
    Vue.use(Backtop)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Avatar)
    Vue.use(Loading.directive)

    Vue.prototype.$loading = Loading.service;

  }
}

export default element
