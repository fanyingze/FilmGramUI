import Button from 'components/Button/Button.vue'
import ButtonGroup from 'components/Button/ButtonGroup.vue'
import Icon from 'components/Icon.vue'
import Col from 'components/Layout/Col.vue'
import Row from 'components/Layout/Row.vue'

import MessageBox from 'plugin/MessageBox/MessageBox.vue'

const script = document.createElement("script")
script.type = 'text/javascript'
script.src = "http://at.alicdn.com/t/font_3455135_g7o0v0181z5.js"
document.getElementsByTagName('body')[0].appendChild(script)

export {Button,ButtonGroup,Icon,Col,Row,MessageBox}
